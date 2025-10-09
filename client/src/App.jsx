import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './Routes';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AllRoutes />
        <Footer />
      </div>
    </Router>
  )
}

export default App
