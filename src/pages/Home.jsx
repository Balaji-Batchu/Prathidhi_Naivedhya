import React from 'react'
import { Link } from 'react-router-dom'
import HungerFacts from '../components/Facts'
import Hero from '../components/Hero'
//import Hero from '../components/Hero'
import Hunger from '../components/Hunger'
import Stats from '../components/Stats'
import Testimonials from '../components/Testinomials'
import What from '../components/Wedo'

function Home() {
  return (
    <div className='bg-[#f6f7f7ff] flex-col items-center justify-center'>
        <Hero />
        <Hunger />
        <Stats />
        <What />
        <HungerFacts />
        <Testimonials />
        <div className='my-4'>
          <p className='font-bold text-4xl ml-16 my-4 text-orange-500'>Intrested to donate?</p>
          <p className='font-semibold text-3xl text-orange-400 text-center'>Don't wait to do GOOD . . .</p>
          <Link to="/register" className='flex items-center justify-center my-4'><button className='bg-orange-400 py-2 px-3 hover:bg-orange-500 rounded-lg text-white font-semibold'>Register Now</button></Link>
          <p className='font-semibold text-xl text-center' >If already registred <span className='text-blue-700 hover:underline underline-offset-4 hover:cursor-pointer'>Login?</span></p>
        </div>
    </div>
  )
}

export default Home