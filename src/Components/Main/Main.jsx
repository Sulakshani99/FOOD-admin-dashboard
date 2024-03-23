import React from 'react';
import category1 from '../../assets/images/category1.png';
import { FaCircleArrowDown } from "react-icons/fa6";

const Main = () => {
  return (
    <div className=' px-2'>
      <div className='flex flex-col gap-3 md:flex-row mt-5'>
        <div className=' flex flex-col w-full md:w-[70%]'>
          <div className=' flex flex-col md:flex-row gap-3 md:gap-5 justify-between items-center bg-theme-colors-green-200 h-52 p-2 text-[#022c22] rounded-lg'>
            
            <div className=' flex flex-col px-3 gap-1 md:ap-2 md:w-[45%]'>
              <div className=' text-sm md:text-2xl font-bold'>All best recipe in one place</div>
              <div className=' text-xs md:text-lg'>Upload your homemade recipe here...</div>
              <div className=' flex items-center gap-3 w-28 bg-theme-colors-green-500 text-white rounded-lg p-1 md:p-2'>
                  <div>Order Now</div>
                  <div></div>
              </div>
            </div>

            <div className=' flex items-center justify-center w-full md:w-[55%]'>
              <img src={category1} className=' w-2/3 h-28 -mt-8 md:mt-0 md:w-58 md:h-[180px]' />
            </div>
          </div>

          <div className=' my-2 text-[#475569] font-bold'>
            Categories
          </div>
          <div className=' grid md:grid-cols-3 lg:grid-cols-5 gap-3 text-[#475569]'>

            <div className='flex flex-col gap-2 items-center py-3 bg-white w-full md:w-28 rounded-md'> 
              <div className='w-full px-2'>
                <div className=' bg-[rgb(118,203,115)] h-28 md:h-14 rounded-lg'>
                  <div className='flex items-center w-full justify-center'>
                    <img src={category1} className='w-28 md:w-14'/>
                  </div>
                </div>
              </div>

              <div className='font-semibold'>
                All
              </div>
              <div className=' flex text-theme-colors-green-500 text-xl'>
                <FaCircleArrowDown />
              </div>
            </div>

            <div className='flex flex-col gap-2 items-center py-3 bg-white w-full md:w-28 rounded-md'> 
              <div className='w-full px-2'>
                <div className=' bg-[rgb(118,203,115)] h-28 md:h-14 rounded-lg'>
                  <div className='flex items-center w-full justify-center'>
                    <img src={category1} className='w-28 md:w-14'/>
                  </div>
                </div>
              </div>

              <div className='font-semibold'>
                Fruits
              </div>
              <div className=' flex text-theme-colors-green-500 text-xl'>
                <FaCircleArrowDown />
              </div>
            </div>

            <div className='flex flex-col gap-2 items-center py-3 bg-white w-full md:w-28 rounded-md'> 
              <div className='w-full px-2'>
                <div className=' bg-[rgb(118,203,115)] h-28 md:h-14 rounded-lg'>
                  <div className='flex items-center w-full justify-center'>
                    <img src={category1} className='w-28 md:w-14'/>
                  </div>
                </div>
              </div>

              <div className='font-semibold'>
                Sandwich
              </div>
              <div className=' flex text-theme-colors-green-500 text-xl'>
                <FaCircleArrowDown />
              </div>
            </div>

            <div className='flex flex-col gap-2 items-center py-3 bg-white w-full md:w-28 rounded-md'> 
              <div className='w-full px-2'>
                <div className=' bg-[rgb(118,203,115)] h-28 md:h-14 rounded-lg'>
                  <div className='flex items-center w-full justify-center'>
                    <img src={category1} className='w-28 md:w-14'/>
                  </div>
                </div>
              </div>

              <div className='font-semibold'>
                Hot Dog
              </div>
              <div className=' flex text-theme-colors-green-500 text-xl'>
                <FaCircleArrowDown />
              </div>
            </div>

            <div className='flex flex-col gap-2 items-center py-3 bg-white w-full md:w-28 rounded-md'> 
              <div className='w-full px-2'>
                <div className=' bg-[rgb(118,203,115)] h-28 md:h-14 rounded-lg'>
                  <div className='flex items-center w-full justify-center'>
                    <img src={category1} className='w-28 md:w-14'/>
                  </div>
                </div>
              </div>

              <div className='font-semibold'>
                Flies
              </div>
              <div className=' flex text-theme-colors-green-500 text-xl'>
                <FaCircleArrowDown />
              </div>
            </div>
            
          </div>

          <div>
            
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Main