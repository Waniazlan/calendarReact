import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { hasGrantedAnyScopeGoogle } from '@react-oauth/google';
import google from '../assets/google.png'
import axios from 'axios';

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly','https://www.googleapis.com/auth/calendar' ]
const GoggleLogin = () => {

const login = useGoogleLogin({
  flow: 'auth-code',
  onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      const {code} = codeResponse
     axios.post('http://localhost:4000/create-token', {code}).then(response =>{
      console.log(response.data)
     }).catch(error =>{
      console.log(error.message)
     })
  },
  onError: errorResponse => console.log(errorResponse),

});


  return (
    <div >
    
        <button className='text-white text-md font-bold bg-blue-400 rounded-md px-3 py-3 flex gap-4 ' onClick={() => login()}>Sign In
          <img className='w-5 h-5' src={google}></img>
        </button>
    
</div>
  );
};

export default GoggleLogin;
