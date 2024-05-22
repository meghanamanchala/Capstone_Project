/* eslint-disable react/prop-types */
// export default Department;
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';
import graduationHat from './Components/assests/graduation-hat.png';
import talking from './Components/assests/talking.png';
import femaleDoctorImg from './Components/assests/female-doctor.png';
import maleDoctorImg from './Components/assests/male-doctor.png';
import './Department.css'; 

// eslint-disable-next-line react/prop-types
function Department({ departmentName }) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // eslint-disable-next-line react/prop-types
        const response = await axios.get(`http://localhost:3000/departments/${departmentName.toLowerCase()}`);
        setDoctors(response.data);
      } catch (err) {
        console.error("Error while fetching data", err);
      }
    };
    fetchData();
  }, [departmentName]);

  return (
    <>
      <Navbar />
      <div className='department'>
        <h2 className='mb-4'>Consult {departmentName}</h2>
        <ul className="doctor-list">
          {doctors.map((doctor) => (
            <li key={doctor._id} className="doctor-item">
              <div className="doctor-box">
                <div className='doct'>
                  <div>
                    <img className="doctor-img" src={doctor.gender === 'Male' ? maleDoctorImg : femaleDoctorImg} alt="doctor-img" />
                  </div>
                  <div>
                    <p className='doctor-name'>{doctor.name}</p>
                    <p className='speciality'>{departmentName}</p>
                    <p className='experience'>{doctor.experience}</p>
                  </div>
                </div>
                <div className='edu'>
                  <img className="graduationHat m-1" src={graduationHat} alt='grad-hat' />
                  <p>{doctor.education}</p>
                </div>
                <div className='doc-language-spoken m-2'>
                  <img className="talking" src={talking} alt='talking' />
                  <p>{doctor.languagesSpoken}</p>
                </div>
                <Link to={`/book-appointment/${departmentName.toLowerCase()}/${doctor._id}`}>
  <button className='mt-3 button-91'>Book Consult with Doctor</button>
</Link>


              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Department;

