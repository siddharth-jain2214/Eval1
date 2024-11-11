import React from 'react'
import Header from '../components/Navbar/Navbar'
import { mailOutline, locationOutline, logoFacebook, logoTwitter, logoInstagram, logoPinterest } from 'ionicons/icons';
import Hero from '../components/Enquiry/Enquiry';
import Services from '../components/OurServices/Services';
import About from '../components/AboutUs/AboutUs';
import Properties from '../components/Properties/Properties';
import NewsBlogs from '../components/NewsBlogs/NewsBlogs';
import ContactUs from '../components/ContactUs/ContactUs';
import Explore from '../components/ExploreDiv/Explore';
import Footer from '../components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Properties></Properties>
      <NewsBlogs></NewsBlogs>
      <ContactUs></ContactUs>
      <Explore></Explore>
      <Footer></Footer>
    </>
  )
}

export default App
