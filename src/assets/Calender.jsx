    // CalendarComponent.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { HiOutlineCalendar } from 'react-icons/hi'; // Calendar Icon (using react-icons)
import 'react-calendar/dist/Calendar.css'; // For styling the calendar

const CalendarComponent = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="relative p-10 gap-10 mr-40 ">
      {/* Calendar Icon */}
      <button
        onClick={toggleCalendar}
        className=" p-2 rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none hover:scale-105 transform transition-all"
      >
        <HiOutlineCalendar className="w-6 h-6" />
      </button>

      {/* Display Calendar on click */}
      {showCalendar && (
        <div className="absolute top-22 right-12 z-10 p-4 bg-white shadow-lg rounded-2xl border border-white-300 
        hover:scale-105 transition-all duration-300">
          <Calendar />
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
