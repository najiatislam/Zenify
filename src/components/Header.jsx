import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-slate-700 rounded-lg px-6 md:py-10 lg:px-20'>
      {/* --------Left Side--------*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book an Appointment <br /> With Trusted Psychologist and Psychiatrist.
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white font-light'>
          <img className='w-28' src={assets.group_profiles} alt="" />
          <p>Browse through our extensive list of trusted Psychologist and Psychiatrist., <br className='hidden sm:block' /> schedule your appointment hassle-free</p>
        </div>
          <Link to='/doctors' className='flex items-center gap-2 bg-slate-300 px-8 py-3 rounded-full text-gray-950 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
            Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
          </Link>
      </div>
      {/* </div>
        <a href='#speciality' className='flex items-center gap-2 bg-slate-300 px-8 py-3 rounded-full text-gray-950 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' >
          Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div> */}

      {/* --------Right Side--------*/}
      <div className='md:w-1/2 relative'>
        <img className='w-full h-full md:absolute bottom-0 rounded-lg object-cover' src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;