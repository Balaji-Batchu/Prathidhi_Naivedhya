import React from 'react';
import child from '../assets/child card.jpeg'
import Membership from '../components/Membership';
import {motion} from 'framer-motion'
import DivForOrganisation from '../components/divForOrganisation';
import Table from '../components/Table';

const Donate = () => {
  return (
    <div>
      <div className='bg-[#20151b] flex justify-start items-center leading-loose'>
        <img src={child} className="border-collapse" />
        <div>
          <p className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 font-bold text-4xl text-center my-8'>
            "Donate - Life - Repeat"
          </p>
          <motion.p
          animate={{ opacity:[0.7,1,0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
          className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 text-lg tracking-wider text-center px-24'>
          A small donation of food can make a big difference in the lives of those who are struggling to put food on the table.
          </motion.p>
        </div>
      </div>
        <DivForOrganisation />
        <Table />
        <Membership />
    </div>
  )
}

export default Donate
  



{/* <img src={child} alt="child" className='w-4/6 bg-[#20151b]'/>
<div className='flex items-center justify-center bg-[#20151b] outline-none relative'>
  <div className=''><div className='absolute right-6 text-center bottom-8 text-orange-500 text-4xl font-bold shadow-white drop-shadow-lg'>Donate - Grow - Repeat
  
  <p className='text-lg text-orange-400 '>A small donation of food can make a big difference in the lives of those who are struggling to put food on the table.</p>
  </div>
  </div>
</div>  */}