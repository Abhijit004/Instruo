import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './Routes';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Sponsors from './components/Sponsors';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AllRoutes />
        <Sponsors />
        <Footer />
      </div>
    </Router>
  )
}

export default App
