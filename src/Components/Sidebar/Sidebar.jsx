import React from 'react';
import {AiFillHome} from 'react-icons/ai';
import {IoFastFoodSharp} from 'react-icons/io5';
import {GiSelfLove} from 'react-icons/gi';
import {RiMessage3Line} from 'react-icons/ri';
import {MdHistoryEdu} from 'react-icons/md';
import {IoMdNotificationsOutline} from 'react-icons/io';
import category1 from '../../assets/images/category1.png';
import {FaCloudUploadAlt} from 'react-icons/fa';
import { SlEmotsmile } from "react-icons/sl";
import { FaBowlFood } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="w-[10%] lg:w-[15%] h-screen bg-white p-4 text-[#475569]">
        <div className='flex flex-col h-full justify-between'>
          <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='font-bold text-2xl text-[#23c441] uppercase'>
            <div className='hidden md:flex'>
              F
              <div className='mt-1'><SlEmotsmile/></div>
              <div className='mt-1'><SlEmotsmile/></div>
              dy
            </div>
            <div className='flex md:hidden'><FaBowlFood/></div>
          </div>

          <div className='flex flex-col gap-10 items-center md:items-start'>

            <div className='flex gap-3 items-center justify-center cursor-pointer hover:border-l-2 hover:border-[#23c441] px-2'>
              <div><AiFillHome/></div>
              <div className='hidden lg:flex'>Home</div>
            </div>
            <div className='flex gap-3 items-center justify-center cursor-pointer hover:border-l-2 hover:border-[#23c441] px-2'>
              <div><IoFastFoodSharp/></div>
              <div className='hidden lg:flex' >Food Order</div>
            </div>
            <div className='flex gap-3 items-center justify-center cursor-pointer hover:border-l-2 hover:border-[#23c441] px-2'>
              <div><GiSelfLove/></div>
              <div className='hidden lg:flex'>Favourite Menu</div>
            </div>
            <div className='flex gap-3 items-center justify-center cursor-pointer hover:border-l-2 hover:border-[#23c441] px-2'>
              <div><RiMessage3Line/></div>
              <div className='hidden lg:flex'>Message</div>
            </div>
            <div className='flex gap-3 items-center justify-center cursor-pointer hover:border-l-2 hover:border-[#23c441] px-2'>
              <div><MdHistoryEdu/></div>
              <div className='hidden lg:flex'>Order History</div>
            </div>
            <div className='flex gap-3 items-center justify-center cursor-pointer hover:border-l-2 hover:border-[#23c441] px-2'>
              <div><IoMdNotificationsOutline/></div>
              <div className='hidden lg:flex'>Notification</div>
            </div>

          </div>
          </div>

          <div className='flex flex-col items-center justify-center h-32 rounded-lg'>
            <div className='flex flex-col gap-1 items-center h-full rounded-md lg:bg-[#dcfce1]'>
              <div className='hidden md:flex w-28 -mt-14'>
                <img src={category1} />
              </div>
              <div className='flex flex-col mt-3 px-5 gap-3 text-sm'>
                <div className='hidden md:flex text-center'>Share your own recipe</div>
                <div>
                  <div className='hidden md:flex items-center px-2 py-2 text-white text-xs rounded-md text-center justify-center bg-[#17a231]'>Upload Now</div>
                  <div className='flex md:hidden text-4xl text-[#23c441]'><FaCloudUploadAlt/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Sidebar;