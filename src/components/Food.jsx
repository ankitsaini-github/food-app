import {BsCart, BsStarFill, BsStarHalf, BsTrash3Fill} from 'react-icons/bs'
import { FaLocationDot, FaSquarePhoneFlip } from "react-icons/fa6";
import React,{useEffect, useState} from 'react'

import { products } from '../products'

const emptyObj={}
for(let i=1;i<=50;i++){
  emptyObj[i]=0;
}

const Fooddetail = ({onClose,food,addToCart})=>{
  return(
    <div className='fixed top-0 left-0 w-full h-full z-40 flex justify-center items-center'>
      <div className=' bg-black w-full h-screen z-40 opacity-50' onClick={onClose}></div>
      <div className='absolute bg-white shadow-md w-11/12 md:w-3/4 h-3/4 z-50 rounded p-1 md:p-10 overflow-y-scroll'>
        <div className='flex'><p onClick={onClose} className='ms-auto px-4 py-1 cursor-pointer border rounded-lg'>Close</p></div>
        <div className='mt-3 flex flex-col xl:flex-row gap-4'>
          <div className='xl:w-1/2 w-full object-cover'>
            <img src={food.image} alt={food.name} className=' rounded-xl'/>
          </div>
          <div className='flex flex-col gap-2 flex-auto p-8'>
            <h1 className='text-4xl text-center font-extrabold'>{food.name}</h1>
            <div className='flex mt-4'>
                <BsStarFill className=' text-orange-500'/>
                <BsStarFill className=' text-orange-500'/>
                <BsStarFill className=' text-orange-500'/>
                <BsStarFill className=' text-orange-500'/>
                <BsStarHalf className=' text-orange-500'/>
              </div>
            <h2 className='text-2xl mb-5'>Price Rs. {food.price}</h2>
            <div className='mb-5 border-t-2 pt-3'>
              <h5 className='font-extrabold text-xl my-2'>{food.hotel}</h5>
              <h5 className='text-slate-500 mb-2 flex gap-4 items-center'><FaLocationDot className='text-lg'/>{food.address}</h5>
              <h5 className=' text-slate-600 mb-2 flex gap-4 items-center'><FaSquarePhoneFlip className='text-lg'/>{food.contact}</h5>
            </div>
            <button className='w-10/12 p-2 bg-orange-400 text-orange-900 text-2xl font-extrabold rounded-lg mx-auto' onClick={()=>addToCart(food)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Food = ({isCartVisible, toggleCart}) => {
  const fromLocalStorage =localStorage.getItem('foodproducts')? JSON.parse(localStorage.getItem('foodproducts')) :[];
  const [cartItems, setCartItems] = useState(fromLocalStorage)
  const [modal, setmodal] = useState(false);
  const [foodinfo, setfoodinfo] = useState(null)

  useEffect(() => {
    localStorage.setItem('foodproducts',JSON.stringify(cartItems))
  }, [cartItems])
  
  const addToCart = (p) => {
    let item=cartItems.find(i=>i.id===p.id)
    let updatedcart=[...cartItems]
    if(item){
      let itemindex=cartItems.findIndex(i=>i.id===p.id)
      item.qty+=1;
      updatedcart[itemindex]=item
    }
    else{
      let newitem={...p,qty:1}
      updatedcart.push(newitem)
    }
    setCartItems(updatedcart);
  }
  const removeFromCart = (id) => {
    let updatedcart=cartItems.filter(i=>i.id!==id)
    setCartItems(updatedcart);
  }
  const getTotalAmount = () => {
    let totalAmount = cartItems.reduce((acc,curr)=>{
      acc += curr.price*curr.qty
      return acc
    },0)
    return totalAmount;
  }

  const openmodal=(p)=>{
    setfoodinfo(p)
    setmodal(true)
  }
  const closemodal=()=>{
    setfoodinfo(null)
    setmodal(false)
  }
  useEffect(()=>{
    if(modal){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'unset';
    }
  },[modal])

  const proceedorder=()=>{
    window.alert('Your Order was Successfull !! Visit again.');
    localStorage.removeItem('foodproducts')
    setCartItems([])
    toggleCart()
  }
  return (
    <div className={`my-12 max-w-[1600px] place-items-center lg:mx-auto flex flex-col gap-12`} id='food'>
      
      {isCartVisible && (
        <div className=' z-10 fixed p-4 right-0 top-0 rounded-s-2xl bg-primary-color w-96 h-screen overflow-y-scroll'>
          <div className=' text-right text-4xl text-white cursor-pointer mb-5' onClick={toggleCart}>&times;</div>
          <p className=' text-2xl font-bold'>Your Order : Rs. {getTotalAmount()}</p>
          {cartItems.map(product =>{
              return <div key={product.id} className='glass my-3 grid grid-cols-5 overflow-hidden'>
                <img className='rounded-lg w-[100px] h-[100px] object-cover col-span-2' src={product.image} alt={product.name}/>
                <div>
                  <p className=' text-xl font-bold pl-2'>{product.qty} x</p>
                  <p className='product-details flex items-center space-x-4 italic text-orange-200 font-extrabold'>{product.name}</p>
                  <p>Rs. {product.price}</p>
                </div>

                <div className='absolute right-1 bottom-1 gap-2 font-bold'> 
                  <button onClick={()=>removeFromCart(product.id)} className='text-red-600 bg-red-300 hover:bg-red-600 hover:text-red-100 p-2 rounded-2xl'><BsTrash3Fill/></button>
                </div>
              </div>
          })}
          {cartItems.length===0?<p className='my-10 text-xl text-orange-300 font-extrabold'>Cart is Empty</p>:<div className='mt-5 w-1/2'>
            <button className='w-10/12 p-2 bg-orange-200 hover:bg-orange-300 text-orange-700 text-2xl font-extrabold rounded-lg mx-auto' onClick={proceedorder}>Order</button>
          </div>}
        </div>
      )}

      <h2 className='text-3xl p-4 w-full text-start'>Food</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-9 p-3 md:p-0'>
        {products.map(product=>(
          <div key={product.id} className=' w-full md:w-[300px] p-5 bg-white rounded-lg glass transition-all duration-200 hover:scale-110'> 
            <img className='cursor-pointer rounded-lg w-full md:w-[400px] h-[280px] md:h-[220px] object-cover' src={product.image} alt={product.name} onClick={()=>openmodal(product)}/>
            <div className='flex flex-col justify-between items-center mt-5 gap-3'>
              <h2 className=' font-semibold text-xl'>{product.name}</h2>
              <div className='flex'>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarHalf className='text-brightColor'/>
              </div>
              <h3 className=' font-semibold text-lg'>Rs. {product.price}</h3>
              <button onClick={()=>{addToCart(product)}} className='p-3 text-2xl w-5/6 rounded-xl bg-orange-400 hover:bg-orange-800 hover:text-white'><BsCart className='mx-auto'/></button>
              
            </div>
          </div>
        ))}
      </div>
      {modal && <Fooddetail onClose={closemodal} food={foodinfo} addToCart={addToCart}/>}
    </div>
  )
}

export default Food