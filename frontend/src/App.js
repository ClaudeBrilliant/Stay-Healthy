import React from 'react';
import Layout from './Components/Landing_Page/Landing_page.js';
import { BrowserRouter, Routes , Route} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar.js';
import Login from './Components/Login/Login.js';
import Signup from './Components/Sign_Up/Sign_Up.js';
//import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch.js'; 
import AppointmentForm from './Components/AppointmentForm/AppointmentForm.js';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.js'
import Dashboard from "./Components/Dashboard";
import ReviewForm from './Components/ReviewForm/Reviews.js';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="Login" element={<Login/>}/>
                <Route path="Signup" element={<Signup/>}/>
                <Route path="/AppointmentForm" element={<AppointmentForm/>} /> 
                <Route path="InstantConsultation" element={<InstantConsultation/>} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="ReviewForm" element={<ReviewForm/>}/>
              </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;