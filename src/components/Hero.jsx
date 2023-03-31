import React from 'react';

import {FiArrowRight} from 'react-icons/fi';

function Hero() {
// //   const heroStyle = {
// //     backgroundImage: `url(${Image})`,
// //     height: '100vh',
// //     width: '100%',
// //     backgroundPosition: 'center',
// //     backgroundSize: 'cover',
// //     position: 'relative',
// //   };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-Hero-pattern bg-no-repeat bg-cover">
            <div className="absolute top-48 left-16 text-center w-1/2">
                <h1 className="text-5xl font-bold mb-4 flex-col text-start text-orange-500 leading-loose "><p className='text-6xl w-fit py-1 rounded-lg transition duration-100 transform hover:bg-orange-500 hover:text-white w-contain'>Donate Food </p> <p>Help Those in Need</p></h1>
                <p className="text-lg text-start text-orange-400 font-semibold leading-loose"><p>Join us in our mission to provide healthy meals to individuals in our community.</p> <p>Your donation can make a big difference in someone's life.</p> <p>Together, we can create a better future for everyone.</p></p>
                <button className='bg-orange-400 rounded-lg p-2 text-white font-semibold absolute left-0 mt-10 hover:bg-orange-500 flex items-center justify-center gap-3 hover:gap-4'>Donate Now<FiArrowRight /></button>
            </div>
        </div>
    );
}

export default Hero;
