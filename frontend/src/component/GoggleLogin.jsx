import React from 'react';
import { useAuth } from './AuthProvider';
import google from '../assets/google.png'





const GoggleLogin = () => {
  const { isLogging, login, logOut } = useAuth();



  return (
    <div className='absolute right-[45px] mt-[160px]'>
    {isLogging ? 
      <button className='text-white text-sm font-semibold hover:bg-slate-200 hover:text-black ease-in duration-300  rounded-xl px-2 py-2 flex gap-3 ' onClick={() => logOut()}>
        <img className='w-5 h-' src={google} alt="Google logo" />
      </button> 
      : 
      <button className='text-white text-sm font-semibold hover:bg-slate-200 hover:text-black ease-in duration-300 rounded-xl px-2 py-2 flex gap-3 ' onClick={() => login()}>
        <img className='w-5 h-5' src={google} alt="Google logo" />
      </button>
    }
  </div>
  );
};

export default GoggleLogin