import React, { useState,useEffect } from 'react';
import Calendar from './component/calendar';
import GoggleLogin from './component/GoggleLogin';
import { GoogleOAuthProvider } from '@react-oauth/google';
import DateTime from './component/DateTime';
import GetEvent from './component/GetEvent';



function App() {

 
    const [imageUrl, setImageUrl] = useState('');
  
    useEffect(() => {
      fetchRandomImage(); 
      const intervalId = setInterval(fetchRandomImage, 10 * 60 * 1000); 
  
      return () => {
        clearInterval(intervalId); 
      };
    }, []); 
  
    const fetchRandomImage = () => {
      fetch('https://api.unsplash.com/photos/random?query=travel&client_id=pQOZcFRQCnbFrHqOiRo2zKA6QwfogM0JmQHNrYzz6p4')
        .then(response => response.json())
        .then(data => {
          setImageUrl(data.urls.regular);
        })
        .catch(error => {
          console.error('Error fetching random image:', error);
        });
      }

    
  return (

    <GoogleOAuthProvider clientId='433784948390-lp2v21b6svlilevtq6ek19pr55oq45bo.apps.googleusercontent.com'>
   <div className='h-screen w-screen' style={{
    backgroundImage: `url(${imageUrl})`,
   backgroundSize: 'cover',
        width: screen,
        height: screen,}}>
    <GoggleLogin />
    <DateTime />
    <Calendar />
    <GetEvent />
    
   </div>
   </GoogleOAuthProvider>
   
  );
  
}

export default App;
