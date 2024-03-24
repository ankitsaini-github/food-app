import React from 'react'
import address from '../assets/address.png'
import fork from '../assets/fork.png'
import time from '../assets/time.png'

const Easy = () => {
  return (
    <div className='flex flex-col py-8 mb-24'>
      <h1 className='mx-auto text-5xl p-8 mb-5'>Get your food</h1>
      <div className='flex flex-col items-center lg:flex-row justify-around'>
        
        <div className='w-[300px] xl:w-[400px] glass flex flex-col justify-between p-5 mx-auto sm:mx-0 my-4 lg:my-0 '>
          <img className='w-[70px] xl:w-[100px] mx-auto mb-3' src={address}/>
          <p className='mx-auto'>1. Find your address</p>
        </div>
        
        <div className='w-[300px] xl:w-[400px] glass flex flex-col justify-between p-5 mx-auto sm:mx-0 my-4 lg:my-0 '>
          <img className='w-[70px] xl:w-[100px] mx-auto mb-3' src={fork}/>
          <p className='mx-auto'>2. Choose your Food</p>
        </div>
        
        <div className='w-[300px] xl:w-[400px] glass flex flex-col justify-between p-5 mx-auto sm:mx-0 my-4 lg:my-0 '>
          <img className='w-[70px] xl:w-[100px] mx-auto mb-3' src={time}/>
          <p className='mx-auto'>3. Wait 15-30 Minutes</p>
        </div>
      
      </div>
    </div>
  )
}

export default Easy