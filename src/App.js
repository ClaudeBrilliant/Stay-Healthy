import React from 'react';
import Layout from './Components/Landing_Page/Landing_page.js';
import { BrowserRouter, Routes , Route} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar.js';
import Login from './Components/Login/Login.js';
import Signup from './Components/Sign_Up/Sign_Up.js';
function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Layout/>}/>
              <Route path="/" element={<Login/>}/>
              <Route path="/" element={<Signup/>}/>
              </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;