// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between w-64 h-full bg-blue-200 text-black p-5 m-3 shadow-lg fixed top-0 left-0 rounded-2xl">
      <h1 className="text-2xl font-bold text-purple-500 mb-6">LMS</h1>

      <h2 className="text-lg font-semibold mb-4">Overview</h2>
      <ul className="space-y-3">
        <li
          className="shadow-xs py-2 px-4 rounded-2xl cursor-pointer hover:bg-white hover:text-black transition-all transition-shadow hover:shadow-lg"
          onClick={() => alert('Dashboard clicked')}
        >
          Dashboard
        </li>
        <li className="py-2 px-4 rounded-2xl cursor-pointer hover:bg-white hover:text-black transition-all transition-shadow hover:shadow-lg">
          Courses
        </li>
        <li className="py-2 px-4 rounded-2xl cursor-pointer hover:bg-white hover:text-black transition-all transition-shadow hover:shadow-lg">
          Tasks
        </li>
        <li className="py-2 px-4 rounded-2xl cursor-pointer hover:bg-white hover:text-black transition-all transition-shadow hover:shadow-lg">
          Groups
        </li>
      </ul>

      <div className='mt-auto'>      
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <ul className="space-y-3">
          <li className="py-2 px-4 rounded-2xl cursor-pointer  hover:text-black transition-all transition-shadow hover:shadow-lg">
          <FaCog className="w-6 h-6 text-black  hover:scale-105 transform transition-all " />
          
          </li>
          <li
            className="py-2 px-4 rounded-2xl cursor-pointer text-red-500 hover:bg-gray-200 hover:text-black transition-all transition-shadow hover:shadow-lg"
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
