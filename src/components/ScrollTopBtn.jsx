import React,{useState} from 'react'

import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollTopBtn = () => {
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <button className='fixed w-auto right-2 bottom-2 text-5xl z-50 cursor-pointer text-orange-400'> 
     <FaArrowCircleUp onClick={scrollToTop}  
     style={{display: visible ? 'inline' : 'none'}}/> 
    </button> 
  ); 
}

export default ScrollTopBtn