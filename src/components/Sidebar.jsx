import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCog } from "react-icons/fa";
import { BurgerSwipe } from "react-burger-icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Burger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 bg-transparent p-3 rounded-full shadow-lg"
      >
        {/* Change color using inline styles */}
        <BurgerSwipe
          isClosed={!isOpen}
          size={30}
          style={{ color: isOpen ? 'green' : 'black' }}
        />
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-blue-200 text-black p-5 shadow-lg rounded-2xl transition-all duration-300 ${isOpen ? "w-64" : "w-0 overflow-hidden"}`} style={{ padding: isOpen ? "1.25rem" : "0", borderWidth: isOpen ? "2px" : "0" }}>
        {isOpen && (
          <div className="flex flex-col justify-between w-64 h-full bg-gradient-to-br from-[#F3E9E8] to-[#96B9D9] text-black p-5 m-3 shadow-lg fixed top-0 left-0 rounded-2xl">
            <h1 className="text-2xl font-bold text-purple-500 mb-6 mt-4">LMS</h1>

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
                <li className="py-2 px-4 rounded-2xl cursor-pointer hover:text-black transition-all transition-shadow hover:shadow-lg">
                  <FaCog className="w-6 h-6 text-black hover:scale-105 transform transition-all" />
                </li>
                <li className="py-2 px-4 rounded-2xl cursor-pointer text-red-500 hover:bg-gray-200 hover:text-black transition-all transition-shadow hover:shadow-lg">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;