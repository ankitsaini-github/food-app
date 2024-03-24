import './App.css'

import Download from './components/Download'
import Easy from './components/Easy'
import Food from './components/Food'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ScrollTopBtn from './components/ScrollTopBtn'
import { useState } from 'react'

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false)

  const toggleCartVisibility = () => {
    setIsCartVisible(prev=>!prev)
  }

  return (
    <>
      <div className=''>
        <Navbar toggleCart={toggleCartVisibility}/>
        <Hero/>
        <Food isCartVisible={isCartVisible} toggleCart={toggleCartVisibility}/>
        <Easy/>
        <Download/>
        <Footer/>
        <ScrollTopBtn/>
      </div>
    </>
  )
}

export default App
