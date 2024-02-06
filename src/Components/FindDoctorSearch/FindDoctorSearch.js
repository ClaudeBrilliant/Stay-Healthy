import React, { useState, useRef } from 'react';
import './FindDoctorSearch.css';

function FindDoctorSearch({ doctors }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSpecialties, setShowSpecialties] = useState(false);
  const specialtiesRef = useRef(null);

  // Function to handle search input change
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  // Function to perform search
  const performSearch = () => {
    const results = doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  // Function to show specialties list
  const handleFocus = () => {
    setShowSpecialties(true);
  };

  // Function to hide specialties list
  const handleBlur = () => {
    setTimeout(() => {
      if (!specialtiesRef.current.contains(document.activeElement)) {
        setShowSpecialties(false);
      }
    }, 0);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a doctor..."
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button onClick={performSearch}>Search</button>

      {showSpecialties && (
        <div ref={specialtiesRef}>
          <ul>
            {doctors.map(doctor => (
              <li key={doctor.id}>{doctor.specialty}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map(doctor => (
              <li key={doctor.id}>{doctor.name}</li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default FindDoctorSearch;
