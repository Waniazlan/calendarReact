import React from 'react'
import googlemeet from '../assets/googlemeet.png'
import collab from '../assets/collab.png'
import menuicon from '../assets/menuicon.png'
import google from '../assets/google.png'

function Panel() {
  return (
    <div className='my-3 mr-6 '>
      <div className='flex ' >      
        <a className='w-20 h-12 my-3 mx-3' href='https://meet.google.com/'>
        <img  className='h-full w-full object-contain' src={googlemeet} alt='goolemeet' ></img>
       </a>     
        <a className='w-20 h-12 my-3 mx-3'  href='https://collab.imago.us'>
        <img  className='h-full w-full object-contain  ' src={collab} alt='collab' ></img>
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
