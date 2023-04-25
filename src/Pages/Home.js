import React from 'react'
import Navbar from '../components/Navbar'
import Header from './Header'
import About from './About'
import Process from './Process'
import Products from './Products'
import Map from './Map'
import { Footer } from './Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Process />
      <Products />
      <Map />
      <Footer />
    </>
  )
}

export default Home