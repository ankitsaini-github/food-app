import {AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart} from 'react-icons/ai'
import React,{useState} from 'react'

import logo from '../assets/logocolor.png';

const Navbar = ({toggleCart}) => {
  const [nav,setNav]=useState(false)
  const handleNav=() => { 
    setNav(!nav)
   }
  return (
    <div className=' text-black h-[80px] max-w-[1600px] mx-auto flex justify-between items-center'>

      <div className='text-xl md:text-3xl font-extrabold primary-color ml-4'><img className=' h-12 logo' src={logo}/></div>
      
      <div className='hidden sm:flex gap-3 md:gap-6 mr-4'>
        <button className=' rounded-lg before:ease-in relative h-8 w-20 overflow-hidden border border-orange-500 bg-primary-color text-white shadow-2xl'>
          Log In
        </button>
        <button className=' rounded-lg before:ease-in relative h-8 w-20 overflow-hidden border border-orange-500 bg-primary-color text-white shadow-2xl'>
          Sign Up
        </button>
      </div>
      <button onClick={toggleCart} className=' rounded-lg p-5 my-auto text-2xl flex justify-center items-center border border-orange-300 h-8 text-orange-700'><AiOutlineShoppingCart/></button>
      <ul className='hidden md:flex'>
        <li className='p-5'><a href='#food'>Food</a></li>
        <li className='p-5'><a href='#download'>Download</a></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden mr-6 z-10'>
        {nav? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={nav? 'z-20 fixed h-full top-0 w-full ease-in-out duration-500' : 'fixed top-[-100%]'}>
        <ul className='p-8 text-2xl w-full bg-gradient-to-br from-red-500 to-orange-500 rounded-lg text-white'>
          <div className='w-100'><AiOutlineClose className='ms-auto' onClick={handleNav}/></div>
          <li className='p-5 border-b border-b-orange-700'><a href='#food'>Food</a></li>
          <li className='p-5 border-b border-b-orange-700'><a href='#download'>Download</a></li>
          <div className='flex gap-4 mt-10'>
            <button className=' rounded-lg h-12 w-28 bg-orange-900 shadow-2xl'>
              Log In
            </button>
            <button className=' rounded-lg h-12 w-28 bg-orange-900 shadow-2xl'>
              Sign Up
            </button>
          </div> 
        </ul>
      </div>

    </div>
  )
}

export default Navbar