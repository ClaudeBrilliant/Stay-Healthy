import React from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

function DoctorCard({ name, experience, rating, imageUrl, careerProfile }) {
    return (
        <div>
            <div className="doctor-card">
            {imageUrl && <img src={imageUrl} alt={name} />}
            <div className="doctor-details">
                <h2>{name}</h2>
                <p>Experience: {experience} years</p>
                <p>Rating: {rating}/5</p>
                {careerProfile && <p>Career Profile: {careerProfile}</p>}
            </div>
            </div>
            <div>  
                <button className='book-appointment-btn'>                    
                <div>Book Appointment</div>
               <div>No Booking Fee</div>
               </button> 
           </div>   
        </div>
    );
}

export default DoctorCard;
