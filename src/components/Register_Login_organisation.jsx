import React from 'react'
import {motion} from 'framer-motion'

import { useState } from 'react'
import {useForm} from 'react-hook-form'
import UserStore from '../store/UserStore'

import { useNavigate } from "react-router-dom";

const Register_login_Organisation = () => {

    const { register, handleSubmit } = useForm();
    const [empty,_] = useState('')

    const add = UserStore((state)=>state.addUser)
    const userdata = UserStore((state)=>state.users)

    let navigate = useNavigate();
    function returnHome() {
        let path = `/donate`;
        navigate(path);
        }
      

    //console.log(userdata)
    const onSubmit =(data,e) =>{
        const user = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password,
            confirmPassword:data.confirm_password,
          };
      
          add(user);
          e.target.reset();
      }

    const [signup,setSignUp] = useState(true);
    function toggle(){
        setSignUp((prev)=>{return !prev})
    }

  return (
    <div>
        {signup ? <div
        className="flex flex-col justify-center items-center h-screen bg-hero-pattern bg-no-repeat bg-cover ">
            <p className='text-yellow-500 bg-gray-600 rounded-lg p-2 font-bold text-2xl text-center mb-2'>Register as an Organisation</p>
            <motion.form onSubmit={handleSubmit(onSubmit)}
            key="signup"
            initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="bg-transparent backdrop-filter backdrop-blur-lg shadow-2xl w-1/3 rounded-lg px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label className="block text-yellow-200 text-sm font-bold mb-2" htmlFor="name">
                    Organisation Name
                </label>
                <input {...register("name")} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
                </div>
                <div className="mb-4">
                <label className="block text-yellow-200 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input {...register("email")} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"/>
                </div>
                <div className="mb-4">
                <label className="block text-yellow-200 text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number
                </label>
                <input {...register("phone_number")} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Enter your phone number"/>
                </div>
                <div className="mb-4">
                <label className="block text-yellow-200 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input {...register("password")} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password"/>
                </div>
                <div className="mb-4">
                <label className="block text-yellow-200 text-sm font-bold mb-2 mt-4" htmlFor="Address">
                    Address
                </label>
                <input {...register("confirm_password")} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="textarea" placeholder="Enter Your Address"/>
                </div>
                <div className="flex items-center justify-between">
                <input className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer" type="submit" onClick={returnHome}
                />
                </div>
                <p className=' px-1 text-yellow-200'>Already registered? <span className='text-blue-600 hover:underline hover:cursor-pointer' onClick={toggle}>Login</span></p>
            </motion.form>  
        </div>
        
        :
        
        <div
        className="flex flex-col justify-center items-center h-screen bg-hero-pattern bg-no-repeat bg-cover">
            <p className='text-yellow-500 bg-gray-600 rounded-lg p-2 font-bold text-2xl text-center mb-2'>Login as an Organisation</p>
        <motion.form
        key="login"
        initial={{ opacity: 0, rotateY: 180 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 180 }}
        transition={{ duration: 0.5 }}
        className="bg-transparent backdrop-filter backdrop-opacity-70 backdrop-blur-xl shadow-2xl w-96 rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
            <label className="block text-yellow-200 text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
            <label className="block text-yellow-200 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" />
            </div>
            <div className="mb-4">
            <label className="block text-yellow-200 text-sm font-bold mb-2" htmlFor="password">
                Unique Organisation Token (UOT)
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your Token" />
            </div>
            <div className="flex items-center justify-between">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={returnHome}>
                Login
            </button>
            </div>
            <p className='py-2 px-1 text-yellow-200'>Not Signed Yet? <span className='text-blue-600 hover:underline hover:cursor-pointer' onClick={toggle}>Sign Up</span></p>
        </motion.form>
        </div>}
    </div>

  )
}

export default Register_login_Organisation