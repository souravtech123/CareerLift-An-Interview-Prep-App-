import React from 'react'
import Navbar from '../Components/Navbar'
import img1 from '../assets/Microsoft_Logo_512px.png'
import img2 from '../assets/icons8-google-logo-48.png'
import img3 from '../assets/icons8-meta-48.png'
import img4 from '../assets/apple_731985.png'
import img5 from '../assets/icons8-netflix-logo-94.png'


const Home = () => {
  return (
    <>
      <Navbar />
      <div className='mt-20'>
      <h1 className='text-center text-5xl  font-serif'>Crack Your Next Interview with Confidence</h1>
      <h2 className='text-center text-xl text-gray-400 w-150 ml-120 mt-4'>From basics to advanced, prepare smarter with AI-driven feedback and curated resources.</h2>
      <div className='flex items-center justify-center'>
      <button className='text-xl bg-gray-950 mt-10 text-white rounded-xl w-50 h-10' >Create Account</button>
      </div>
      <div className='flex flex-row w-40 h-15 gap-18 mt-30 ml-120' >
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      </div>
      </div>
      
    </>
  )
}

export default Home