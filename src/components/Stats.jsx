import React,{useState} from 'react'
import stats from '../assets/stats.jpg'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'

const Stats = () => {
    
    const statsData = [
        'According to the United Nations, more than 690 million people worldwide are hungry or malnourished, and this number is expected to increase due to the impact of COVID-19.',
        'Hunger is a widespread problem that affects both developing and developed countries. In fact, hunger and malnutrition are the leading risk factors for global morbidity and mortality.',
        'Children are the most vulnerable to hunger and malnutrition, with 144 million children under the age of five suffering from stunting due to malnutrition.',
        'Hunger is not just about lack of food, but also about lack of access to nutritious food. In many parts of the world, people suffer from hunger even though there is enough food to go around. This is because poverty and inequality prevent people from accessing the food they need.',
        'Hunger has long-term impacts on health, education, and economic development. Malnutrition can lead to stunted growth, poor cognitive development, and increased risk of disease. This can in turn impact a person\'s ability to learn and work, perpetuating the cycle of poverty and hunger.',
        'Despite the scale of the problem, hunger is a solvable issue. With the right investments in agriculture, social protection programs, and nutrition interventions, we can end hunger and malnutrition.',
        'Donating food or funds to a food bank or other hunger relief organization is a simple and effective way to help those in need. Your support can make a big difference in the lives of people who are struggling with hunger.',
    ];
    
    const [len,setLen] = useState(0)
    // console.log(statsData.length)

  return (
    <div className='py-10 rounded-lg '>
    <h1 className='text-orange-500 text-4xl font-bold px-24 hover:underline underline-offset-2'>Stats . . .</h1>
    <div className='w-11/12 p-8 flex items-center justify-center '>
      <img className='h-64 hover:h-68 rounded-lg hover:cursor-pointer ml-16 ' src={stats} alt='hungry' />
      <div className='rounded-lg items-center flex bg-[#f6f7f7ff] px-16 py-4 font-semibold leading-loose gap-6 hover:drop-shadow-xl'>
        <button onClick={() => {setLen(prev=>prev-1)}} disabled={len == 0}><BsArrowLeftShort size={48}/></button>
        <p className='py-2'>{statsData[len]}</p>
        <button onClick={() => {setLen(prev=>prev+1)}} disabled={len == statsData.length-1}><BsArrowRightShort size={48}/></button>
      </div>
    </div>
  </div>
  )
}

export default Stats