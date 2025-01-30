import React from "react";
import { FaBook, FaClipboardList, FaCheckCircle, FaTimesCircle } from "react-icons/fa";


const Card = ({ logo, count, text, bgColor }) => {
  return (
    <div className="flex flex-col items-center bg-[#D4E7C5]/20 shadow-md rounded-lg p-5 w-full max-w-xs h-64 transform transition-transform duration-300 hover:scale-105">
      <div className={`h-20 w-20 flex items-center justify-center rounded-full ${bgColor} text-white mb-4`}>
        {logo}
      </div>
      <p className="text-2xl font-bold pt-4 text-center">{count}</p>
      <p className="text-xl text-gray-500 pt-6 text-center text-[#86A789]">{text}</p>
    </div>
  );
};

const CourseCard = ({ courseName, modulesCount, coursesCount, completedCount, pendingCount, progress }) => {
  return (
    <div className="flex flex-grow flex-col items-center bg-white/10 shadow-md rounded-lg p-5 w-full h-auto transform transition-transform duration-300 hover:scale-105 py-6 mb-4 ">
    <p className="text-xl font-bold text-blue-900 self-start">{courseName}</p>
    <div className="flex items-center justify-between py-8 w-full px-4">
      <p className="text-lg flex items-center text-gray-500 text-center"><span className="flex font-bold mr-2 text-2xl">
        <FaBook className="mr-2"/>{modulesCount}</span> Modules</p>
      <p className="text-lg flex items-center text-gray-500 text-center"><span className="font-bold mr-2 text-2xl">{coursesCount}</span> Courses</p>
    </div>
    <div className="flex justify-between w-full py-4 px-4">
      <p className="text-lg flex items-center text-gray-500 text-center"><span className="font-bold mr-2 text-2xl">{completedCount}</span> Completed</p>
      <p className="text-lg flex items-center text-gray-500 text-center"><span className="font-bold mr-2 text-2xl">{pendingCount}</span> Pending</p>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4 relative">
      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      <span className="absolute right-0 top-[-1rem] text-xs text-gray-700">{progress}%</span>
    </div>
  </div>
  );
};

export { Card, CourseCard };