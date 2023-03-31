import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import {FcLock} from 'react-icons/fc'
import { motion } from "framer-motion";

import user_img from '../assets/user.webp'
import userStore from "../store/UserStore";

export default function Navbar() {

  const data = userStore((state)=>state.users)
  const removeUser = userStore((state)=>state.removeUser)
  const [user, setUser] = useState({});
  const [click, setClick] = useState(false);

  
  useEffect(() => {
    const user_details = JSON.parse(localStorage.getItem("user_details"));
    if (user_details === null) {
      console.log("null");
    } else {
      //console.log("user existed", user_details);
      setUser(user_details[0]);
    }
  }, [localStorage.getItem("user_details")]);

  function handleClick() {
    setClick(prev => !prev);
  }

  
  async function handleLogout() {
    try{
      await signOut(auth);
      removeUser();
      console.log("successfully logged out");
    }
    catch(error){
      console.log(error)
    }
    localStorage.removeItem('user_details');
    window.location.reload();
  }
  console.log(user?.photoURL)

  
  return (
    <div>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-12 h-16  bg-gradient-to-r from-white to-gray-200 py-9 z-5">
        <Link to='/' className="text-orange-500 hover:cursor-pointer text-xl font-bold font-serif flex-col p-2">
          <p className="samarkan text-2xl tracking-wider">Prathidhi</p>
          <p className="samarkan text-2xl tracking-wider">Naivedhya</p>
        </Link>
        <ul className="flex gap-10">
          <motion.li 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="hover:underline hover:bg-orange-500 hover:text-white font-semibold rounded-lg p-2 underline-offset-4 text-orange-400">
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="hover:underline hover:bg-orange-500 hover:text-white font-semibold rounded-lg p-2 underline-offset-4 text-orange-400">
            <Link to="/donate">Donate</Link>
          </motion.li>
          <motion.li 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="hover:underline hover:bg-orange-500 hover:text-white font-semibold rounded-lg p-2 underline-offset-4 text-orange-400">
            <Link to="/mission">Mission</Link>
          </motion.li>
          <motion.li 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="hover:underline hover:bg-orange-500 hover:text-white font-semibold rounded-lg p-2 underline-offset-4 text-orange-400">
            <Link to="/contact-us">Contact Us</Link>
          </motion.li>
          <div className="relative">
            <motion.img 
            whileTap={{ scale: 0.8 }}
            src={user?.photoURL ? user?.photoURL : user_img} alt="user-Logo" className="h-10 rounded-full hover:cursor-pointer" onClick={handleClick} />
            {click && (
              <div className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-64 right-2">
                {click && (
    <motion.div
      className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-64 right-2"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {user?.displayName ? (
        <div className="text-center">
          <motion.p
            className="rounded-lg hover:rounded-lg p-2 hover:bg-gray-100 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {user?.displayName}
          </motion.p>
          <motion.p
            className="rounded-lg hover:rounded-lg p-2 hover:bg-gray-100 cursor-pointer hover:font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {user?.email}
              </motion.p>
              <motion.p
                className="rounded-lg hover:rounded-lg p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-center gap-4 hover:cursor-not-allowed"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Volunteer perks
                <FcLock />
              </motion.p>
              <motion.p
                className="rounded-lg hover:rounded-lg p-2 hover:bg-gray-100 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLogout}
              >
                Logout
              </motion.p>
            </div>
          ) : (
            <div>
              <Link to="/register" onClick={handleClick}>
                <motion.p
                  className="rounded-lg hover:rounded-lg p-2 hover:bg-gray-100 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Login
                </motion.p>
              </Link>
            </div>
          )}
        </motion.div>
      )}
              </div>
            )}
          </div>
        </ul>
      </motion.div>
    </div>
  );
}




{/* {click ? (<div className="absolute">
                    ( user ? <div className="absolute bg-slate-100 left-[1400px] top-8 rounded-lg">
                        <p className="p-2 text-center hover:bg-slate-200 hover:cursor-pointer hover:rounded-lg">email</p>
                        <p className="p-2 text-center hover:bg-slate-200 hover:cursor-pointer">email</p>
                        <p className="p-2 text-center hover:bg-slate-200 hover:cursor-pointer">email</p>
                        <p className="p-2 text-center hover:bg-slate-200 hover:cursor-pointer">email</p>
                    </div> : 
                    <div className="absolute bg-slate-100 right-10 w-48 top-14 rounded-lg">
                        <p className="p-2 text-center hover:bg-slate-200 hover:cursor-pointer hover:rounded-lg">Login</p>
                    </div>)
                </div>) : null} */}
                {/* {click && <p>hello</p>} */}