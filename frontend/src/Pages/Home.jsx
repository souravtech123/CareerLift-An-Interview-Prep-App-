import React from 'react'
import Navbar from '../Components/Navbar'
import Exist from '../Components/Exist'
import Why from '../Components/Why'
import Features from '../Components/Features'
import Collab from '../Components/Collab'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Exist/>
      <Why />
      <Features/>
      <Collab/>
      <Footer/>
    </div>
  )
}

export default Home