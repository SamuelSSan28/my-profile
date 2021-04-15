import React from 'react';
import { Routes, Route} from 'react-router-dom';

//import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';

function App() {
    return (
        <div>
            <Navbar />
            <Intro />
            <About />
            <Portfolio />
            <Contact />
            <BackToTop />
            <Preloader />
        </div>
); 
}

export default function RoutesComponent(){

  return( 
    <Routes>
    
      <Route path="/" element={<App />} />

    </Routes>
  )
}