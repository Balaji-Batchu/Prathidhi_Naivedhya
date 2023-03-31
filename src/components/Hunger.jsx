import React, { useState } from 'react'
import watermark from '../assets/watermark-XXMLoiAdFG-transformed.jpeg'

const Hunger = () => {
  const [readmore, setReadmore] = useState(false)

  const toggleReadmore = () => {
    setReadmore(!readmore)
  }

  return (
    <div className='py-10 rounded-lg '>
      <h1 className='text-orange-500 text-4xl font-bold px-24 hover:underline underline-offset-2'>Hunger . . .</h1>
      <div className='w-11/12 p-8 flex items-center justify-center '>
        <div className='items-center flex bg-[#f6f7f7ff] px-16 py-4 font-semibold leading-loose'>
          <p>
            Hunger is a widespread problem that affects millions of people around the world. According to the Global Hunger Index, around 690 million people suffer from hunger and malnutrition, making it one of the most significant challenges facing our global community.
            {readmore ? (
              <>
                Poverty is a significant factor that contributes to hunger. Poor households lack the financial means to purchase adequate food, and this leads to malnutrition, stunting, and undernourishment. Furthermore, economic instability, natural disasters, conflict, and climate change also contribute to hunger. These factors lead to disruptions in food supply chains, food price hikes, and loss of agricultural productivity, further exacerbating the problem of hunger. <a onClick={toggleReadmore} className='text-orange-500 hover:underline cursor-pointer'>Read Less</a>
              </>
            ) : (
              <>
                Poverty is a significant factor that contributes to hunger. <a onClick={toggleReadmore} className='text-orange-500 hover:underline cursor-pointer'>Read more...</a>
              </>
            )}
          </p>
        </div>
        <img className='h-64 hover:h-68 rounded-lg hover:cursor-pointer ' src={watermark} alt='hungry' />
      </div>
    </div>
  )
}

export default Hunger
