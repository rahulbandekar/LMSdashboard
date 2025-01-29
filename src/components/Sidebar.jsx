// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between w-64 h-full bg-white text-black p-5 m-3 shadow-lg fixed top-0 left-0 rounded-2xl">
      <h1 className="text-xl font-bold text-purple-500 mb-6">LMS</h1>

      <h2 className="text-lg font-semibold mb-4">Overview</h2>
      <ul className="space-y-3">
        <li
          className="py-2 px-4 rounded-2xl cursor-pointer hover:bg-purple-500 hover:text-white transition-all"
          onClick={() => alert('Dashboard clicked')}
        >
          Dashboard
        </li>
        <li className="py-2 px-4 rounded-2xl cursor-pointer hover:bg-purple-500 hover:text-white transition-all">
          Courses
        </li>
        <li className="py-2 px-4 rounded-2xl cursor-pointer hover:bg-purple-500 hover:text-white transition-all">
          Tasks
        </li>
        <li className="py-2 px-4 rounded-2xl cursor-pointer hover:bg-purple-500 hover:text-white transition-all">
          Groups
        </li>
      </ul>

      <div className='mt-auto'>      
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <ul className="space-y-3">
          <li className="py-2 px-4 rounded-2xl cursor-pointer hover:bg-purple-500 hover:text-white transition-all">
            Settings
          </li>
          <li
            className="py-2 px-4 rounded-2xl cursor-pointer text-red-500 hover:bg-gray-200 transition-all"
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
