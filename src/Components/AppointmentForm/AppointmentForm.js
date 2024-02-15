import React, { useState } from 'react';
import './AppointmentForm.css'

function AppointmentForm() {
    const [patientName, setPatientName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [specificDate, setSpecificDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle form submission, such as sending data to the server
        console.log('Form submitted:', { patientName, appointmentDate, appointmentTime, timeSlot, specificDate });
    };

    return (
        <form onSubmit={handleSubmit} className="appointment-form">
            <div>
                <label htmlFor="patientName">Patient's Name:</label>
                <input 
                    type="text" 
                    id="patientName" 
                    value={patientName} 
                    onChange={(e) => setPatientName(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="appointmentDate">Appointment Date:</label>
                <input 
                    type="date" 
                    id="appointmentDate" 
                    value={appointmentDate} 
                    onChange={(e) => setAppointmentDate(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="appointmentTime">Appointment Time:</label>
                <input 
                    type="time" 
                    id="appointmentTime" 
                    value={appointmentTime} 
                    onChange={(e) => setAppointmentTime(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="timeSlot">Time Slot:</label>
                <select id="timeSlot" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} required>
                    <option value="">Select Time Slot</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>
            </div>
            <div>
                <label htmlFor="specificDate">Appointment Date:</label>
                <input 
                    type="date" 
                    id="specificDate" 
                    value={specificDate} 
                    onChange={(e) => setSpecificDate(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AppointmentForm;

