import React from 'react'
import Navbar from '../components/Navbar'
import Header from './Header'
import About from './About'
import Process from './Process'
import Products from './Products'
import Map from './Map'
import { Footer } from './Footer'
import Table from './Table'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Process />
      <Products />
      <Table />
      <Map />
      <Footer />
    </>
  )
}

export default Home