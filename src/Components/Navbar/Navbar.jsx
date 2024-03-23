import React from 'react';
import person1 from '../../assets/images/person1.png';
import { FaSearch } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='w-full mt-5 px-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='text-[#475569] font-semibold'>
            Home
          </div>
          <div>
          <div className='flex items-center justify-center px-3 text-lg rounded-full bg-white text-[#475569]'>
            <div className='mt-1'><FaSearch/></div>
            <input type='text' placeholder='search' className=' bg-transparent p-2 w-28 md:w-auto px-6 focus:outline-none rounded-full' />
          </div>
        </div>

        <div className='flex gap-2 items-center'>
          <div className='hidden md:flex'>
            <div className='flex items-center justify-center text-[#475569] h-10 w-10 rounded-full bg-white'>
              <div><IoMailUnreadOutline/></div>
            </div>
          </div>

          <div className='hidden md:flex'>
            <div className='flex items-center justify-center text-[#475569] h-10 w-10 rounded-full bg-white'>
              <div><IoNotificationsOutline/></div>
          </div>
          </div>

          <div>
          <div className='h-10 w-10'>
            <img src={person1} className='rounded-full'/>
          </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default Navbar;