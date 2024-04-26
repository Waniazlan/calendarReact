import React, { useState } from 'react';
import EventCalendar from './EventCalendar';
import Panel from './Panel'

const Calendar = () => {

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const[show,setShow] =useState(false)


  const [calendarData, setCalendarData] = useState(generateCalendarData(currentYear, currentMonth));


  function generateCalendarData(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();
    
    let calendarData = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfWeek) || dayCounter > daysInMonth) {
          week.push('');
        } else {
          week.push(dayCounter);
          dayCounter++;
        }
      }
      calendarData.push(week);
    }

    return calendarData;
  }


  const handlePrevMonth = () => {
    const newDate = new Date(currentYear, currentMonth - 1);
    const newYear = newDate.getFullYear();
    const newMonth = newDate.getMonth();
    setCalendarData(generateCalendarData(newYear, newMonth));
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };


  const handleNextMonth = () => {
    const newDate = new Date(currentYear, currentMonth + 1);
    const newYear = newDate.getFullYear();
    const newMonth = newDate.getMonth();
    setCalendarData(generateCalendarData(newYear, newMonth));
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];


  return (
    <div className=''>
       {show && <EventCalendar />}
        <div className='flex flex-col'>
        <div className='flex gap-2'>
        <div className=" py-5 px-5 mx-auto bg-black  bg-opacity-50 rounded-md ">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold text-white">{monthNames[currentMonth]} {currentYear}</h2>   
        </div>
            <div className="grid grid-cols-7 font-bold pt-3">
              <div className="text-center text-black ">Sun</div>
              <div className="text-center text-black ">Mon</div>
              <div className="text-center text-black">Tue</div>
              <div className="text-center text-black">Wed</div>
              <div className="text-center text-black">Thu</div>
              <div className="text-center text-black">Fri</div>
              <div className="text-center text-black">Sat</div>
              {calendarData.map((week, index) => (
                week.map((day, index) => (
                  <div key={index} className="text-center mr-2 ml-2 ">
                    {day !== '' ? (
                      <button key={index} className={`w-full hover:bg-black text-white rounded-md px-1 py-1 ${currentDay === day ? 'bg-black' : ''}`}>
                        {day}
                      </button>
                    ) : ''}
                  </div>
                ))
              ))}
            </div>
          </div>
      
      <button onClick={() => setShow(!show)} className='mr-3'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8">
          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>

      </button>
     

        </div>   
              <Panel />
        </div>
       
    </div>
  );
};

export default Calendar;
