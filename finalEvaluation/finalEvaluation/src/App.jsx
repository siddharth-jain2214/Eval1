import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Navbar/Navbar';
import Hero from '../components/Enquiry/Enquiry';
import Services from '../components/OurServices/Services';
import About from '../components/AboutUs/AboutUs';
import Properties from '../components/Properties/Properties';
import NewsBlogs from '../components/NewsBlogs/NewsBlogs';
import ContactUs from '../components/ContactUs/ContactUs';
import Explore from '../components/ExploreDiv/Explore';
import Footer from '../components/Footer/Footer';
import NewPage from '../components/NewPage'; 

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Properties />
            <NewsBlogs />
            <ContactUs />
            <Explore />
            <Footer />
          </>
        } />
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
