import React from 'react';
import {AiFillHome} from 'react-icons/ai';
import {IoFastFoodSharp} from 'react-icons/io5';
import {GiSelfLove} from 'react-icons/gi';
import {RiMessage3Line} from 'react-icons/ri';
import {MdHistoryEdu} from 'react-icons/md';
import {IoMdNotificationsOutline} from 'react-icons/io';

const Sidebar = () => {
  return (
    <div className="w-[10%] lg:w-[15%] h-screen bg-white p-4 text-[#475569]">
        <div className='flex flex-col h-full justify-between'>
          <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='font-bold text-2xl text-[#23c441] uppercase'>Food</div>

          <div className='flex flex-col gap-10 items-start'>

            <div className='flex gap-3 items-center justify-center cursor-pointer hover:border-l-2 hover:border-[#23c441] px-2'>
              <div><AiFillHome/></div>
              <div>Home</div>
            </div>
            <div className='flex gap-3 items-center justify-center cursor-pointer hover:border-l-2 hover:border-[#23c441] px-2'>
              <div><IoFastFoodSharp/></div>
              <div>Food Order</div>
            </div>
            <div className='flex gap-3 items-center justify-center cursor-pointer hover:border-l-2 hover:border-[#23c441] px-2'>
              <div><GiSelfLove/></div>
              <div>Favourite Menu</div>
            </div>
            <div className='flex gap-3 items-center justify-center cursor-pointer hover:border-l-2 hover:border-[#23c441] px-2'>
              <div><RiMessage3Line/></div>
              <div>Message</div>
            </div>
            <div className='flex gap-3 items-center justify-center cursor-pointer hover:border-l-2 hover:border-[#23c441] px-2'>
              <div><MdHistoryEdu/></div>
              <div>Order History</div>
            </div>
            <div className='flex gap-3 items-center justify-center cursor-pointer hover:border-l-2 hover:border-[#23c441] px-2'>
              <div><IoMdNotificationsOutline/></div>
              <div>Notification</div>
            </div>

          </div>
          </div>

          <div>Call to action</div>
        </div>
    </div>
  );
}

export default Sidebar;