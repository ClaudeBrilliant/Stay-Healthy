import React, { useState } from 'react';

function FindDoctorSearch() {
    const [showDoctorList, setShowDoctorList] = useState(false);

    const handleFocus = () => {
        setShowDoctorList(true);
    };

    const handleBlur = () => {
        // Hide the list after a short delay to give a chance for click events to be handled.
        setTimeout(() => {
            setShowDoctorList(false);
        }, 100);
    };

    return (
        <div>
            <input 
                name="" 
                placeholder="Enter Doctor's speciality" 
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {showDoctorList && (
                <div>
                    {/* Here, you can render the list of doctor specialties */}
                    <ul>
                        <li>Dentist</li>
                        <li>Dermatology:</li>
                        <li>Cardiology</li>
                        <li>Nerology</li>
                        <li>Gastroenterology</li>
                        <li>Endocrinology</li>
                        <li></li>
                        <li>Orthopedics</li>
                        <li>Oncology</li>
                        {/* Add more specialties as needed */}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default FindDoctorSearch;
