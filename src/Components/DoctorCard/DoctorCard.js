// Example usage in another component

import React from 'react';
import DoctorCard from './DoctorCard';
import './DoctorCard.css'

const DoctorList = () => {
  const doctors = [
    { id: 1, name: 'Dr. Smith', experience: 10, rating: 4.5 },
    { id: 2, name: 'Dr. Johnson', experience: 8, rating: 4.8 },
    // Add more doctor objects as needed
  ];

  return (
    <div>
      <h2>List of Doctors</h2>
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          name={doctor.name}
          experience={doctor.experience}
          rating={doctor.rating}
        />
      ))}
            <div>  
                <button className='book-appointment-btn'>                    
            <div>Book Appointment</div>
          <div>No Booking Fee</div>
        </button> </div>
         
    </div>
    
  );
};

export default DoctorList;
