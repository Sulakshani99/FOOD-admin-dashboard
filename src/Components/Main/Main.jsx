import React from 'react';
import category1 from '../../assets/images/category1.png';
import { FaCircleArrowDown } from "react-icons/fa6";
import product1 from '../../assets/images/product1.jpg';
import { FaPlus } from 'react-icons/fa';
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import product3 from '../../assets/images/product3.jpg';
import product2 from '../../assets/images/product2.jpg';
import product4 from '../../assets/images/product4.jpg';
import product5 from '../../assets/images/product5.jpg';
import product6 from '../../assets/images/product6.jpg';
import category2 from '../../assets/images/category2.jpg';
import category from '../../assets/images/category.jpg';
import category3 from '../../assets/images/category3.jpg';
import bg2 from '../../assets/images/bg2.jpg';
import bg1 from '../../assets/images/bg1.jpg';
import { FaJediOrder } from "react-icons/fa";

const Main = () => {
  return (
    <div className=' px-2'>
      <div className='flex flex-col gap-3 md:flex-row mt-5'>
        <div className=' flex flex-col w-full md:w-[70%]'>

          <div className=' flex flex-col md:flex-row gap-3 md:gap-5 justify-between items-center bg-theme-colors-green-200 h-52 p-2 text-[#022c22] rounded-lg'>
            
            <div className=' flex flex-col px-3 gap-1 md:ap-2 md:w-[45%]'>
              <div className=' text-sm md:text-2xl font-bold'>All best recipe in one place</div>
              <div className=' text-xs md:text-lg'>Upload your homemade recipe here...</div>
              <div className=' flex items-center gap-3 w-32 bg-theme-colors-green-500 text-white rounded-lg p-1 md:p-2'>
                  <div>Order Now</div>
                  <div><FaJediOrder/></div>
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
                    <img src={category1} className='w-28 md:w-16 mt-2'/>
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
                    <img src={category1} className='w-28 md:w-16 mt-2'/>
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
                    <img src={category1} className='w-28 md:w-16 mt-2'/>
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
                    <img src={category1} className='w-28 md:w-16 mt-2'/>
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
                    <img src={category1} className='w-28 md:w-16 mt-2'/>
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

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4 text-[#475569] ml-12'>
            <div className=' bg-white p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] text-[#475569] p-3 rounded-lg'>
                <div className=' flex justify-center ml-4 w-14 p-1 text-xs font-bold rounded-md bg-[#fecaca] text-[#f87171]'>
                  15% off
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={product1} className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col w-full items-center justify-center '>
                    <div className=' font-semibold text-lg text-[#022c22]'>Blocholi Juice</div>
                    <div className='text-sm'>Taste our natural Blocholi juice, well fined</div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div className='font-bold text-[#022c22]'>
                      15%
                    </div>
                    <div className='bg-white rounded-md p-2 text-theme-colors-green-600'>
                      <div><FaPlus/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=' bg-white p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] text-[#475569] p-3 rounded-lg'>
                <div className=' flex justify-center ml-4 w-14 p-1 text-xs font-bold rounded-md bg-[#fecaca] text-[#f87171]'>
                  10% off
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={product6} className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col w-full items-center justify-center '>
                    <div className=' font-semibold text-lg text-[#022c22]'>Lemon Juice</div>
                    <div className='text-sm'>Taste our natural Lemon juice, well fined</div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div className='font-bold text-[#022c22]'>
                      10%
                    </div>
                    <div className='bg-white rounded-md p-2 text-theme-colors-green-600'>
                      <div><FaPlus/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=' bg-white p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] text-[#475569] p-3 rounded-lg'>
                <div className=' flex justify-center ml-4 w-14 p-1 text-xs font-bold rounded-md bg-[#fecaca] text-[#f87171]'>
                  12% off
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={category} className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col w-full items-center justify-center '>
                    <div className=' font-semibold text-lg text-[#022c22]'>Melon Juice</div>
                    <div className='text-sm'>Taste our natural melon juice, well fined</div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div className='font-bold text-[#022c22]'>
                      12%
                    </div>
                    <div className='bg-white rounded-md p-2 text-theme-colors-green-600'>
                      <div><FaPlus/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=' bg-white p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] text-[#475569] p-3 rounded-lg'>
                <div className=' flex justify-center ml-4 w-14 p-1 text-xs font-bold rounded-md bg-[#fecaca] text-[#f87171]'>
                  7% off
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={category2} className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col w-full items-center justify-center '>
                    <div className=' font-semibold text-lg text-[#022c22]'>Cucumber Juice</div>
                    <div className='text-sm'>Taste our natural cucumber juice, well fined</div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div className='font-bold text-[#022c22]'>
                      7%
                    </div>
                    <div className='bg-white rounded-md p-2 text-theme-colors-green-600'>
                      <div><FaPlus/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=' bg-white p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] text-[#475569] p-3 rounded-lg'>
                <div className=' flex justify-center ml-4 w-14 p-1 text-xs font-bold rounded-md bg-[#fecaca] text-[#f87171]'>
                  15% off
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={bg2} className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col w-full items-center justify-center '>
                    <div className=' font-semibold text-lg text-[#022c22]'>Myrobalan Juice</div>
                    <div className='text-sm'>Taste our natural myrobalan juice, well fined</div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div className='font-bold text-[#022c22]'>
                      15%
                    </div>
                    <div className='bg-white rounded-md p-2 text-theme-colors-green-600'>
                      <div><FaPlus/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=' bg-white p-1 rounded-lg w-full md:w-48'>
              <div className='flex flex-col gap-3 bg-[#fef2f2] text-[#475569] p-3 rounded-lg'>
                <div className=' flex justify-center ml-4 w-14 p-1 text-xs font-bold rounded-md bg-[#fecaca] text-[#f87171]'>
                  11% off
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <div>
                    <img src={bg1} className='w-28 h-28 rounded-full'/>
                  </div>
                  <div className='flex flex-col w-full items-center justify-center '>
                    <div className=' font-semibold text-lg text-[#022c22]'>Anona Juice</div>
                    <div className='text-sm'>Taste our natural Anona juice, well fined</div>
                  </div>
                  <div className='flex w-full justify-between items-center'>
                    <div className='font-bold text-[#022c22]'>
                      11%
                    </div>
                    <div className='bg-white rounded-md p-2 text-theme-colors-green-600'>
                      <div><FaPlus/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  

        </div>

        <div className='flex flex-col items-center rounded-md w-full md:w-[30%] bg-[#e5fde9]'>
          <div className='flex flex-col mt-2 w-full'>

            <div className='mb-8 px-4'>
              <div className=' bg-theme-colors-green-200 p-3 rotate-2 h-48 w-full lg:w-[95%]'>
                <div className=' bg-theme-colors-green-400 rounded-md h-48 w-full -rotate-3'>
                  <div className='flex flex-col py-4 text-white h-full items-center justify-between'>
                    <div className='flex w-full justify-between items-center px-4'>
                      <div className=' font-semibold'>NSB</div>
                      <div><MdEnergySavingsLeaf/></div>
                    </div>
                    <div>
                      <div className=' text-xl lg:text-2xl md:font-semibold'>
                        4412 5632 7821
                      </div>
                    </div>
                    <div className='flex w-full justify-between items-center px-4'>
                        <div>
                          <div className='text-xs'> Card Holder</div>
                          <div>Sulakshani Tashina</div>
                        </div> 
                        <div>
                          <div className='text-xs'>Expired Date</div>
                          <div>07/24</div>
                        </div>         
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='flex w-full] justify-between items-center px-3'>
              <div className=' font-semibold text-[#475569]'>Order Now</div>
              <div className='flex gap-2 items-center'>
              <div className=' text-theme-colors-green-500'>view all</div>
              <div className=' text-theme-colors-green-600 mt-0.5'><FaArrowRight/></div>
              </div>
            </div>

            <div className=' flex w-full justify-between items-center px-4 py-4'>
              <div className='flex gap-2'>
                <div className='flex items-center justify-center bg-[#fecaca] rounded-md p-1'>
                  <div className=''>
                    <img src={product3} className='w-8 h-8 rounded-full'/>
                  </div>
                </div>
                <div className=' text-[#475569]'>
                  <div className=' font-semibold'>Green peas</div>
                  <div className=' text-sm'>Rs.100/=</div>
                </div>
              </div>
              <div className='text-[#475569]'>x3</div>
            </div>

            <div className=' flex w-full justify-between items-center px-4 py-4'>
              <div className='flex gap-2'>
                <div className='flex items-center justify-center bg-[#fecaca] rounded-md p-1'>
                  <div className=''>
                    <img src={product2} className='w-8 h-8 rounded-full'/>
                  </div>
                </div>
                <div className=' text-[#475569]'>
                  <div className=' font-semibold'>Peanuts</div>
                  <div className=' text-sm'>Rs.160/=</div>
                </div>
              </div>
              <div className='text-[#475569]'>x1</div>
            </div>

            <div className=' flex w-full justify-between items-center px-4 py-4'>
              <div className='flex gap-2'>
                <div className='flex items-center justify-center bg-[#fecaca] rounded-md p-1'>
                  <div className=''>
                    <img src={product5} className='w-8 h-8 rounded-full'/>
                  </div>
                </div>
                <div className=' text-[#475569]'>
                  <div className=' font-semibold'>Dates</div>
                  <div className=' text-sm'>Rs.90/=</div>
                </div>
              </div>
              <div className='text-[#475569]'>x2</div>
            </div>

            <div className=' flex w-full justify-between items-center px-4 py-4'>
              <div className='flex gap-2'>
                <div className='flex items-center justify-center bg-[#fecaca] rounded-md p-1'>
                  <div className=''>
                    <img src={product4} className='w-8 h-8 rounded-full'/>
                  </div>
                </div>
                <div className=' text-[#475569]'>
                  <div className=' font-semibold'>Soya</div>
                  <div className=' text-sm'>Rs.250/=</div>
                </div>
              </div>
              <div className='text-[#475569]'>x4</div>
            </div>

            <div className=' flex w-full justify-between items-center px-4 py-4'>
              <div className='flex gap-2'>
                <div className='flex items-center justify-center bg-[#fecaca] rounded-md p-1'>
                  <div className=''>
                    <img src={category2} className='w-8 h-8 rounded-full'/>
                  </div>
                </div>
                <div className=' text-[#475569]'>
                  <div className=' font-semibold'>Chick-peas</div>
                  <div className=' text-sm'>Rs.275/=</div>
                </div>
              </div>
              <div className='text-[#475569]'>x1</div>
            </div>

            <div className=' flex w-full justify-between items-center px-4 py-4'>
              <div className='flex gap-2'>
                <div className='flex items-center justify-center bg-[#fecaca] rounded-md p-1'>
                  <div className=''>
                    <img src={product3} className='w-8 h-8 rounded-full'/>
                  </div>
                </div>
                <div className=' text-[#475569]'>
                  <div className=' font-semibold'>Green peas</div>
                  <div className=' text-sm'>Rs.100/=</div>
                </div>
              </div>
              <div className='text-[#475569]'>x3</div>
            </div>

            <div className=' flex w-full justify-between items-center px-4 py-4'>
              <div className='flex gap-2'>
                <div className='flex items-center justify-center bg-[#fecaca] rounded-md p-1'>
                  <div className=''>
                    <img src={product2} className='w-8 h-8 rounded-full'/>
                  </div>
                </div>
                <div className=' text-[#475569]'>
                  <div className=' font-semibold'>Peanuts</div>
                  <div className=' text-sm'>Rs.160/=</div>
                </div>
              </div>
              <div className='text-[#475569]'>x1</div>
            </div>

            <div className=' flex w-full justify-between items-center px-4 py-4'>
              <div className='flex gap-2'>
                <div className='flex items-center justify-center bg-[#fecaca] rounded-md p-1'>
                  <div className=''>
                    <img src={product5} className='w-8 h-8 rounded-full'/>
                  </div>
                </div>
                <div className=' text-[#475569]'>
                  <div className=' font-semibold'>Dates</div>
                  <div className=' text-sm'>Rs.90/=</div>
                </div>
              </div>
              <div className='text-[#475569]'>x2</div>
            </div>

            <div className=' flex w-full justify-between items-center px-4 py-4'>
              <div className='flex gap-2'>
                <div className='flex items-center justify-center bg-[#fecaca] rounded-md p-1'>
                  <div className=''>
                    <img src={product4} className='w-8 h-8 rounded-full'/>
                  </div>
                </div>
                <div className=' text-[#475569]'>
                  <div className=' font-semibold'>Soya</div>
                  <div className=' text-sm'>Rs.250/=</div>
                </div>
              </div>
              <div className='text-[#475569]'>x4</div>
            </div>

            <div className=' flex w-full justify-between items-center px-4 py-4'>
              <div className='flex gap-2'>
                <div className='flex items-center justify-center bg-[#fecaca] rounded-md p-1'>
                  <div className=''>
                    <img src={category2} className='w-8 h-8 rounded-full'/>
                  </div>
                </div>
                <div className=' text-[#475569]'>
                  <div className=' font-semibold'>Chick-peas</div>
                  <div className=' text-sm'>Rs.275/=</div>
                </div>
              </div>
              <div className='text-[#475569]'>x1</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Main