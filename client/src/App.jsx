import { useState, useEffect } from 'react'
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AllRoutes from './Routes';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Preloader from './Components/Preloader/Preloader';

export const DownloadOurApp = "https://github.com/Harshit-Kr01/InstruoApplication/releases/latest/download/Instruo14.apk";

const ScrollToTop = ()=> {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls the page to top
  }, [pathname]);

  return null; // doesn't render anything
}


function App() {
  return (
    <Router>
      <Preloader />
      <ScrollToTop />
      <Navbar />
      <AllRoutes />
      <Footer />
    </Router>
  )
}

export default App;
