import React from 'react';
import Bronze from '../assets/badge.png'
import Silver from '../assets/badge (1).png'
import Gold from '../assets/badge (2).png'
import Emerald from '../assets/badge (3).png'

const Membership = () => {
  return (
    <div className='my-4 leading-loose'>
        <p className='pl-16 font-bold text-3xl text-orange-400 hover:underline underline-offset-2'>Try Membership Plans</p>
        <div className='grid grid-cols-4 gap-4 mx-20 my-8 justify-items-center'>
            <div className="hover:cursor-pointer bg-opacity-50 bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Membership Card</h2>
                <p className="text-white">3 Months</p>
            </div>
            <div
            className="px-6 py-4 flex-col justify-between items-center h-full">
                <div>
                    <p className='py-1text-gray-700 text-base'>
                    <p className='py-1'>Validity : 3 Months</p>
                    <p className='py-1 flex gap-4 items-center justify-center'>Membership Type : Bronze <img className='h-8' src={Bronze}/></p>
                    <p className='py-1'>One span food for 90 days (or)</p>
                    <p className='py-1'>Two spans food for 45 days</p>
                    <p className='py-1'>Certification of Contribution (Br)</p>
                    <p className='py-1'>One month D-card access</p>
                    </p>
                </div>
                <div className="mt-4">
                <a
                    href="#"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-full font-semibold"
                >
                    Rs. 316/-
                </a>
                </div>
            </div>
            </div>

            <div className="hover:cursor-pointer bg-opacity-50 bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Membership Card</h2>
                <p className="text-white">6 Months</p>
            </div>
            <div className="px-6 py-4 ">
                <p className='py-1text-gray-700 text-base'>
                <p className='py-1'>Validity : 6 Months</p>
                <p className='py-1 flex gap-4 items-center justify-center'>Membership Type : Silver <img className='h-8' src={Silver}/></p>
                <p className='py-1'>One span food for 180 days (or)</p>
                <p className='py-1'>Two spans food for 90 days</p>
                <p className='py-1'>Certification of Contribution (Sl)</p>
                <p className='py-1'>Three months D-card access</p>
                </p>
                <div className="mt-4">
                <a
                    href="#"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-full font-semibold"
                >
                    Rs. 516/-
                </a>
                </div>
            </div>
            </div>

            <div className="hover:cursor-pointer bg-opacity-50 bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Membership Card</h2>
                <p className="text-white">12 Months</p>
            </div>
            <div className="px-6 py-4 flex-col justify-between items-center h-full">
                <div>
                    <p className='py-1text-gray-700 text-base'>
                    <p className='py-1'>Validity : 12 Months</p>
                    <p className='py-1 flex gap-4 items-center justify-start'>Membership Type : Gold<img className='h-8' src={Gold}/></p>
                    <p className='py-1'>Two spans food for whole Year(or)</p>
                    <p className='py-1'>Three spans food for 240 days</p>
                    <p className='py-1'>Certification of Contribution (Gl)</p>
                    <p className='py-1'>Six months D-card access</p>
                    </p>
                </div>
                <div className="mt-4">
                <a
                    href="#"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-full font-semibold"
                >
                    Rs. 1116/-
                </a>
                </div>
            </div>
            </div>

            <div className="hover:cursor-pointer bg-opacity-50 bg-gradient-to-b from-violet-500 to-fuchsia-800 hover:from-fuchsia-800 hover:to-violet-500 outline outline-orgroup ange-500 p-4 outline-2 shadow-xl rounded-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4 rounded-t-lg">
                <h2 className="text-2xl font-bold text-white">Membership Card</h2>
                <p className="text-white">24 Months</p>
            </div>
            <div className="px-6 py-4 bg-white rounded-b-lg">
                <div>
                    <p className='py-1text-gray-700 text-base'>
                    <p className='py-1'>Validity : 24 Months</p>
                    <p className='py-1 flex gap-4 items-center justify-center'>Membership Type : Emerald <img className='h-8' src={Emerald}/></p>
                    <p className='py-1'>Two spans food for 2 Years(or)</p>
                    <p className='py-1'>Three spans food for 400 days</p>
                    <p className='py-1'>Certification of Contribution (Em)</p>
                    <p className='py-1'>Twelve months D-card access</p>
                    </p>
                </div>
                <div className="mt-4">
                <a
                    href="#"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-full font-semibold"
                >
                    Rs. 2116/-
                </a>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Membership;
