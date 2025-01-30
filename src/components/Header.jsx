import React from 'react';
import { Link } from 'react-router-dom';

import Profile from './Profile';



const Header = () => {
  return (
    <div className="h-16 ml-3 rounded-2xl bg-gradient-to-br from-[#F3E9E8] to-[#96B9D9] 
     shadow-md flex items-center px-4 relative top-0 left-3 w-auto mr-5 mt-3 ">
      <div className="relative w-full flex items-center">
        {/* Left fade effect */}
        <div ></div>

        {/* Left side menu items */}
        <div className="flex gap-6 z-10">
        <Link to="/super-admin">
          <div
            className="text-black shadow-xs font-bold py-2 px-4 bg-transparent
              border-purple/10 rounded-xl cursor-pointer transition-all
               hover:bg-gradient-to-br from-[#F8F6F4] to-[#E8DCCA] 
               hover:text-black transition-shadow hover:shadow-lg">
            Super Admin
          </div>
          </Link>
          <Link to="/admin">
          <div
            className="text-black shadow-xs font-bold py-2 px-4 bg-transparent 
             border-purple/10 rounded-xl cursor-pointer transition-all 
             hover:bg-gradient-to-br from-[#F8F6F4] to-[#E8DCCA]
             hover:text-black transition-shadow hover:shadow-lg">
            Admin
          </div>
          </Link>
          <Link to="/">
          <div
            className="text-black shadow-xs font-bold py-2 px-4 bg-transparent 
             border-purple/10 rounded-xl cursor-pointer transition-all 
             hover:bg-gradient-to-br from-[#F8F6F4] to-[#E8DCCA]
             hover:text-black transition-shadow hover:shadow-lg">
            Student
          </div>
          </Link>
        </div>

        {/* Right side search bar */}
        <div className=" pl-10 mr-15 flex items-center gap-3 z-10 ml-20">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 shadow-md border-2 border-gray-300 rounded-2xl outline-none hover:scale-105 transform duration-200"
          />
          <div
            className=" shadow-md py-2 px-4 bg-gradient-to-br from-[#F8F6F4] to-[#E8DCCA]
             text-black rounded-2xl cursor-pointer transition-all 
             hover:opacity-80 transition-shadow hover:shadow-lg">
            Search
          </div>
         
        </div>

        {/* Right fade effect */}
        <div ></div>
        

        <div className=" relative items-center"><Profile/></div>

      </div>
    
    
      
    
    </div>
  );
};

export default Header;