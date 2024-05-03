import React from 'react'
import googlemeet from '../assets/googlemeet.png'
import collab2 from '../assets/collab2.png'
import menuicon from '../assets/menuicon.png'
import google from '../assets/google.png'

function Panel() {
  return (
    <div className='absolute mt-[750px] ml-[500px]'>
      <div className='flex ' >      
        <a className='w-20 h-12 my-3 mx-3' href='https://meet.google.com/'>
        <img  className='h-full w-full object-contain' src={googlemeet} alt='goolemeet' ></img>
       </a>     
       <a className=' w-20 h-12 my-3 mx-3 '  href='https://collab.imago.us'>
        <img  className='h-full w-full object-contain' src={collab2} alt='collab' ></img>
       </a>  
        <a className='w-20 h-12 my-3 mx-3'  href='https://www.google.com/'>
        <img  className='h-full w-full object-contain  ' src={google} alt='google' ></img>
       </a>     
        <a className='w-20 h-12 my-3 mx-3'  href='https://meet.google.com/'>
        <img  className='h-full w-full object-contain ' src={menuicon} alt='menuicon' ></img>
       </a>      
    </div>
   
    </div>
  )
}

export default Panel
