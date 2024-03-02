import React from 'react';
import Layout from './Components/Landing_Page/Landing_page.js';
import { BrowserRouter, Routes , Route} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar.js';
import Login from './Components/Login/Login.js';
import Signup from './Components/Sign_Up/Sign_Up.js';
//import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch.js'; 
import AppointmentForm from './Components/InstantConsultationBooking/AppointmentFormIC/AppointmentFormIC.js';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.js'
import Dashboard from "./Components/Dashboard";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="Login" element={<Login/>}/>
                <Route path="Signup" element={<Signup/>}/>
                <Route path="appointments" element={<InstantConsultation/>} /> 
                <Route path="InstantConsultaion" element={<InstantConsultation/>} />
                <Route path="/dashboard" element={<Dashboard/>}/>
              </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;