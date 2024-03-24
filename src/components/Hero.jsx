import { AiOutlineSearch } from 'react-icons/ai'
import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1600px] mx-auto grid sm:grid-cols-2 sm:h-[500px] gap-4'>
      
      <div className='rounded-xl bg-food-image-2 bg-cover bg-center w-full flex flex-col justify-center text-center text-white p-4 h-[300px] sm:h-full'>
        <div className='bg-white rounded-xl w-[300px] lg:w-full mx-auto grid grid-cols-10 p-4'>
          
          <form className='border border-gray-300 shadow-xl col-span-7 lg:col-span-8 flex justify-between items-center max-w-[700px] mx-auto w-full p-1 rounded-md text-black bg-gray-100/90'>
            <input className='mx-4 w-full bg-transparent focus:outline-none text-xs lg:text-xl' type='text' placeholder='Type your location ...'/>
            <button className='text-xl lg:text-3xl'>
              <AiOutlineSearch/>
            </button>
          </form>

          <button className='col-span-2 mx-auto my-auto rounded-lg before:ease relative h-8 w-20 overflow-hidden border border-orange-500 bg-orange-500 text-white shadow-2xl'>
            Find
          </button>
          
        </div>
      </div>

      <div className='rounded-xl bg-food-image bg-cover bg-center h-[300px] sm:h-full'>
      </div>

    </div>
  )
}

export default Hero