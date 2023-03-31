import React from 'react';
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineInstagram,AiFillGithub} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white leading-8">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-between mx-8">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4 hover:text-orange-500 hover:cursor-pointer underline underline-offset-4">Contact Us</h4>
            <p>Vijayawada<br />Andhra Pradesh, INDIA<br />Phone: 555-555-5555<br />Email: info@fooddonation.com</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex-col">
            <h4 className="text-lg font-bold mb-4 hover:text-orange-500 hover:cursor-pointer underline underline-offset-4 ml-2">Follow Us</h4>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-gray-300"><FcGoogle size={24}/></a></li>
              <li><a href="#" className="text-white hover:text-gray-300"><AiOutlineInstagram size={24}/></a></li>
              <li><a href="#" className="text-white hover:text-gray-300"><AiFillGithub size={24}/></a></li>
            </ul>
          </div>
          <div className=" mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4 hover:text-orange-500 hover:cursor-pointer underline underline-offset-4">Donate Now</h4>
            <p className="mb-4">Help us fight hunger by donating today.</p>
            <Link to="/donate" className="bg-white text-gray-900 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300">Donate Now</Link>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <div className="text-center">
          <p className="text-sm text-gray-500">&copy; 2023 Food Donation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;