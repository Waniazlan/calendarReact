import React from 'react'
import { useEffect,useState} from 'react';

function DateTime() {
    const [currentDay, setCurrentDay] = useState('');
    const [currentTime, setCurrentTime] = useState('');
  
   
    const updateDateTime = () => {
      const now = new Date();
      const options = { weekday: 'long'};

      setCurrentDay(now.toLocaleDateString(undefined, options));
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
   
    useEffect(() => {
      
      updateDateTime()
    
      const interval = setInterval(updateDateTime, 6000);
  
      return () => clearInterval(interval);
    }, []);
  
    return(
        <div className="text-center md:mr-[550px] mt-10 font-semibold font-sans text-shadow-md text-white ">
        <div className="font-bold  text-[40px]">{currentDay}</div>
        <div className="font-semibold  mb-4 text-[30px]">{currentTime}</div>
      </div>
    )
}

export default DateTime
