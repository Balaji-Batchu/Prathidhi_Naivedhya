import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { ImCheckboxUnchecked } from 'react-icons/im'

const Mobile = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-900 to-blue-800 leading-loose">
      <div className="p-8 rounded-lg shadow-lg text-white bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 mx-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Page</h1>
        <p className="">Mobile webpage is still in process. . .</p>
        <p className="">1. Don't worry we are here to help You !</p>
        <p className=" flex items-center justify-start">2. click on <BsThreeDotsVertical size={14}/> at right-top of your browser</p>
        <p className='flex items-center gap-2'>3. Now You can see "Desktop view <ImCheckboxUnchecked />"</p>
        <p>4. Now click the check box</p>
      </div>
    </div>
  );
};

export default Mobile;
