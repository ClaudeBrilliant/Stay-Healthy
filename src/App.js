import React from 'react';
import Layout from './Components/Landing_Page/Landing_page.js';
import { BrowserRouter, Routes , Route} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar.js';
function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Layout/>}/>
              </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;