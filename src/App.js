import React from 'react';
import Layout from './Components/Landing_Page/Landing_page.js';
import { BrowserRouter, Routes , Route} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar.js';
import Login from './Components/Login/Login.js';
import Signup from './Components/Sign_Up/Sign_Up.js';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch.js'; 
function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="Login" element={<Login/>}/>
                <Route path="Signup" element={<Signup/>}/>
                <Route path="SearchDoctor" element={FindDoctorSearch}></Route>
              </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;