import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../IconsRow';
import Profile from './Profile';
import Calendar from 'react-calendar';
import CalendarComponent from '../assets/Calender';

const Header = () => {
  return (
    <div className="h-16 ml-3 rounded-xl bg-white shadow-md flex items-center px-4 relative top-0 left-3 w-full ">
      <div className="relative w-full flex items-center">
        {/* Left fade effect */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

        {/* Left side menu items */}
        <div className="flex gap-6 z-10">
        <Link to="/super-admin">
          <div
            className="text-black shadow-xs font-bold py-2 px-4 bg-transparent border-2 border-purple/10 rounded-xl cursor-pointer transition-all hover:bg-purple-500 hover:text-white">
            Super Admin
          </div>
          </Link>
          <Link to="/admin">
          <div
            className="text-black shadow-xs font-bold py-2 px-4 bg-transparent border-2 border-purple/10 rounded-xl cursor-pointer transition-all hover:bg-purple-500 hover:text-white">
            Admin
          </div>
          </Link>
          <Link to="/">
          <div
            className="text-black shadow-xs font-bold py-2 px-4 bg-transparent border-2 border-purple/10 rounded-xl cursor-pointer transition-all hover:bg-purple-500 hover:text-white">
            Student
          </div>
          </Link>
        </div>

        {/* Right side search bar */}
        <div className="ml-auto flex items-center gap-3 z-10 ml-20">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border-2 border-gray-300 rounded-2xl outline-none"
          />
          <div
            className="py-2 px-4 bg-purple-500 text-white rounded-2xl cursor-pointer transition-all hover:bg-gray-400">
            Search
          </div>
         
        </div>

        {/* Right fade effect */}
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        
      </div>
    
    <div><CalendarComponent/></div>
      
    
    <div>
    <Profile/>
   </div>
    </div>
  );
};

export default Header;