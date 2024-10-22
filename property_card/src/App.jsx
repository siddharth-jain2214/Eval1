import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Footer></Footer>
    </>
  )
}

export default App
