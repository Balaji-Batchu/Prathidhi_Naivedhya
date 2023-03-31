import React from 'react'
import {FiArrowRight} from 'react-icons/fi';
import {BsPatchQuestionFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const DivForOrganisation = () => {

  const [popUp, setPopUp] = useState(false);
  return (
    <div>
        <p className='text-orange-400 p-2 font-bold text-3xl px-16 pt-4 mb-2'>Register your Organisation to get Food</p>
        <ul className='list-disc list-inside mx-96 bg-slate-200 w-fit p-8 rounded-lg drop-shadow-lg hover:shadow-2xl'>
            <li className='flex gap-2 items-center hover:-translate-y-1 py-2 text-lg text-gray-800 font-medium hover:bg-orange-300 w-fit px-2 rounded-lg'> Register your Organisation (or) Foundation at <Link to="/register-organisation" className='hover:underline underline-offset-4 decoration-white flex items-center gap-3 hover:cursor-pointer'>Organisation register page <FiArrowRight size={24} className="pt-1 hover:text-white"/></Link></li>
            <li className='hover:-translate-y-1 py-2 text-lg text-gray-800 font-medium hover:bg-orange-300 w-fit px-2 rounded-lg'> Get Your Oraganisation Scheduled visit by our Volunteers</li>
            <li className='hover:-translate-y-1 py-2 text-lg text-gray-800 font-medium hover:bg-orange-300 w-fit px-2 rounded-lg'> Verification and members count Registration at your place</li>
            <li className='hover:-translate-y-1 py-2 text-lg text-gray-800 font-medium hover:bg-orange-300 w-fit px-2 rounded-lg'> Digital Entry</li>
            <li onClick={()=>setPopUp((prev)=>!prev)} className='hover:cursor-pointer hover:-translate-y-1 py-2 text-lg text-gray-800 font-medium hover:bg-orange-300 w-fit px-2 rounded-lg group'> Get Your Unique Organisation Token <span className='invisible items-center pl-1 group-hover:visible'>?</span></li>
            {popUp && <p className=' gap-2 px-4'><p className='text-gray-700 font-semibold'>Unique Organisation Token</p><br />
            <p className='leading-relaxed text-gray-600'>*In today's digital world, security is of utmost importance. One way to ensure the security of an organization's data is by using unique organization tokens. These tokens are allocated to verified organizations and are used to authenticate their identity when logging in. This helps to reduce the risk of fake data being entered into the system.


Once an organization has been verified and has the correct unique organization token, they will be able to login and access their services. These tokens are a form of token-based authentication, which is a protocol that allows users to verify their identity and receive a unique access token in return.</p><br />


<p className='leading-relaxed text-gray-600'>*By using unique organization tokens, organizations can have the peace of mind that their data is secure and protected from unauthorized access. It also allows for more streamlined and efficient access to services, as only verified organizations are able to login and use the system. Overall, these tokens are an essential tool in maintaining the security and integrity of an organization's data.</p></p>}
        </ul>
    </div>
  )
}

export default DivForOrganisation