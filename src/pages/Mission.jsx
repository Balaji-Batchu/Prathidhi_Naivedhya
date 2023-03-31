import React from 'react'
import mission from '../assets/mission-hands.png'
import supply from '../assets/supply.png'
import distribution from '../assets/distribution.png'
import operation from '../assets/operations.png'
import existence from '../assets/Existence.png'

import { motion } from 'framer-motion'

const Mission = () => {
  return (
    <div className=''>
      <motion.p 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.3 }} 
        className='bg-gradient-to-r from-orange-400 to-orange-500 text-3xl font-bold h-16 text-yellow-50 text-center pt-3 '
      >
        Our MISSION AND VALUES
      </motion.p>
      <div className='flex-col justify-center items-center my-2'>
        <motion.p 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3, delay: 0.2 }} 
          className='font-bold text-3xl text-orange-400 w-fit px-56 text-center my-4'
        >
          OUR MISSION
        </motion.p>
        <motion.div 
          whileHover={{ y: -5, boxShadow: '0 10px 10px rgba(0,0,0,0.20)' }} 
          className='bg-[#ece0d3ff] flex justify-center items-center w-8/12 ml-56 rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl hover:cursor-pointer'
        >
          <motion.img 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3, delay: 0.4 }} 
            src={mission} 
            alt="mission-hands" 
            className='h-56' 
          />
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.3, delay: 0.6 }} 
            className='group px-4 pr-8 font-medium leading-loose'
          >
            To contribute to <motion.span 
              className='group-hover:underline underline-offset-2 decoration-orange-500'
            >
              reducing food insecurity
            </motion.span> in India, through food waste prevention and the call for solidarity, by <motion.span 
              className='group-hover:underline underline-offset-2 decoration-orange-500'
            >
              supporting and developing Food Banks
            </motion.span> in countries where they are most needed.
          </motion.p>
        </motion.div>
      </div>

        <div className='flex-col justify-center items-center '>
          <motion.p
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3, delay: 0.2 }} 
          className='font-bold text-3xl text-orange-400 w-fit px-56 text-center my-6 mt-10'>OUR VALUES</motion.p>

          <div className='my-8'>
            <motion.div 
            initial={{ opacity: 0, x:-70 }} 
            animate={{ opacity: 1, x:0 }} 
            transition={{ type:"spring", ease: "linear", duration: 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 5px 10px rgba(0,0,0,0.25)' }} 
            className='bg-[#f0cb6c] text-[#262e2d] group py-6 gap-3 my-6 flex justify-center items-center w-3/4 ml-40 px-4 rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl hover:cursor-pointer'>
              <img src={supply} alt="mission-hands" className='h-72' />
              <p className='group px-4 pr-8 font-medium leading-loose py-2 tracking-wide'><span className='font-bold text-2xl text-[#333333] group-hover:underline underline-offset-4 decoration-white'>1. Supply</span><br />Food Banks’ principal aim is to prevent food waste and food insecurity. The “supply” is secured, in the strict respect of the hygiene requirements by recovering surplus food and/or donations from the following sectors:
                  <br />
                  • Agriculture
                  <br />
                  • Food processing and manufacturing and distribution
                  <br />
                  • Hospitality (Hotels - Restaurants - Canteens)
                  <br />
                  Although the recovered food might no longer be for sale, it must still be safe for consumption at all stages along the supply chain.
                  <br />
              </p>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x:-70 }} 
            animate={{ opacity: 1, x:0 }} 
            transition={{ type:"spring", ease: "linear", duration: 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 5px 10px rgba(0,0,0,0.25)' }} 
            className='bg-[#f0cb6c] text-[#262e2d] group py-6 gap-3 my-6 flex justify-center items-center w-3/4 ml-40 px-4 rounded-lg overflow-hidden transform  hover:-translate-y-1 hover:shadow-xl hover:cursor-pointer'>
              <img src={distribution} alt="mission-hands" className='h-72' />
              <p className='group px-4 pr-8 font-medium leading-loose py-2 tracking-wide'>
                <span className='font-bold text-2xl text-[#333333] group-hover:underline underline-offset-4 decoration-white'>2. Distribution</span><br />Food Banks are non-profit organizations, and their operating model may vary from country to country. They are at the service of independent charities combatting food insecurity or they incorporate such charities in their own organization. <br />• They organize food distributions through their network of local charities, groups or communities or directly to final beneficiaries, where needed.
                <br />
                Food aid is made available to people in need by charities for example in the form of:
                <br />
                • meals in “welfare/social restaurants”,
                <br />
                • meals known as “soup kitchens” at defined distribution centers,
                <br />
                • food parcels.</p>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x:-70 }} 
            animate={{ opacity: 1, x:0 }} 
            transition={{ type:"spring", ease: "linear", duration: 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 5px 10px rgba(0,0,0,0.25)' }} 
            className='bg-[#f0cb6c] text-[#262e2d] group py-6 gap-3 my-6 flex justify-center items-center w-3/4 ml-40 px-4 rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl hover:cursor-pointer'>
              <img src={operation} alt="mission-hands" className='h-72' />
              <p className='group px-4 pr-8 font-medium leading-loose py-2 tracking-wide'><span className='font-bold text-2xl text-[#333333] group-hover:underline underline-offset-4 decoration-white'>3. Operations</span><br />Food Banks refuse the primacy of money: their action is based on their willingness to promote active and responsible solidarity.
                <br />
                They engage in witnessing food insecurity and food waste and making the wider public aware of these issues through a dependency on:
                <br />
                • donations of material or equipment,
                <br />
                • subsidization of operating or investment expenses by third parties,
                <br />
                • contribution of charities to the running expenses.
              </p>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x:-70 }} 
            animate={{ opacity: 1, x:0 }} 
            transition={{ type:"spring", ease: "linear", duration: 0.1 }}
            whileHover={{ y: -4, boxShadow: '0 5px 10px rgba(0,0,0,0.25)' }} 
            className='bg-[#f0cb6c] text-[#262e2d] group py-6 gap-3 my-6 flex justify-center items-center w-3/4 ml-40 px-4 rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl hover:cursor-pointer'>
              <img src={existence} alt="mission-hands" className='h-72' />
              <p className='group px-4 pr-8 font-medium leading-loose py-2 tracking-wide'><span className='font-bold text-2xl text-[#333333] group-hover:underline underline-offset-4 decoration-white'>4. Existence</span><br />Food Banks exist mainly through the action of volunteers and charities with different spiritual and human inspiration. Food Banks will ensure that they, any of their volunteers or paid staff, and their networks will avoid any type of discrimination towards the beneficiaries.
              <br /><br />
              This Charter constitutes the formal engagement of each member of the European Food Banks Federation to observe its principles. The formal signature of the European Food Banks Federation Charter is required to existing and new Full or Associate Members.
                 </p>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Mission