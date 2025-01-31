import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import activeData from "../Tables/activeUsersData";

export default function ActiveList() {
  const [activeTab, setActiveTab] = useState("users"); // State to toggle between tabs

  return (
    <div>
      <div className="max-w-full p-6 border-lg bg-silver-500 shadow-lg rounded-xl">
        <div className="flex">
          {/* Buttons to toggle between tabs */}
          <div className="flex ml-5 mb-10 space-x-6 mt-10">
            <button
              onClick={() => setActiveTab("users")}
              className={`px-4 py-2 rounded-2xl font-medium hover:scale-105 ${
                activeTab === "users"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Active Users
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={`px-2 py-2 rounded-2xl font-medium hover:scale-105 ${
                activeTab === "courses"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Active Courses
            </button>
          </div>

          {/*search bar*/}

          <div className="flex justify-center items-center ml-10 px-4 mt-1.2 rounded-2xl">
            <div className="flex items-center border-2 border-gray-300 rounded-2xl overflow-hidden shadow-md hover:scale-105 transform duration-200 ">
              {/* Input Field */}
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 w-80 outline-none rounded-xl hover:scale-105 "
              />
              {/* Search Button */}
              <button className="bg-blue-gray text-black px-4 py-2 flex items-center hover:scale-105  transition">
                <FaSearch className="mr-2" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Active Users Section */}
        {activeTab === "users" && (
          <div className="max-w-5xl h-full ml-5 mt-10 pt-5 relative rounded-xl ">
            <h2 className="text-2xl font-bold mb-5 ">Active Users</h2>
            <ul className="space-y-4">
              {/* Column Headings */}
              <li className="font-bold flex items-center justify-between p-8 shadow-lg rounded-lg
               bg-gradient-to-br from-blue-300 to-green-400">
                <div className="w-1/4 font-medium">Organisation Name</div>
                <div className="w-1/4 text-center font-medium">Total Users</div>
                <div className="w-1/4 text-center font-medium">
                  Active Users
                </div>
                <div className="w-1/4 text-right font-medium">
                  Today's Login Users
                </div>
              </li>

              {/* Active Users Data */}
              {activeData.activeUsersData.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between mt-5 p-6 border border-gray-300 
                rounded-lg shadow-lg hover:scale-105 transition transform duration-200 
                bg-gradient-to-br from-blue-100 to-green-200">

                  <div className="w-1/4">{item.organisationName}</div>
                  <div className="w-1/4 text-center">{item.totalUsers}</div>
                  <div className="w-1/4 text-center">{item.activeUsers}</div>
                  <div className="w-1/4 text-right">
                    {item.todaysLoginUsers}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

      {/* Active Courses Section */}
      {activeTab === "courses" && (
        <div className="max-w-5xl h-full ml-5 mt-10 pt-5 relative rounded-xl">
          <h2 className="text-2xl font-semibold mb-5">Active Courses</h2>
          <ul className="space-y-4">
            {/* Placeholder for Active Courses */}
            <li className="font-bold flex items-center justify-center p-8 shadow-md rounded-lg 
             bg-gradient-to-br from-lime-300 to-green-300">
            <div className="w-1/4 font-medium">Course Name</div>
              <div className="w-1/4 text-center font-medium">Total Users</div>
              <div className="w-1/4 text-center font-medium">Active Users</div>
              <div className="w-1/4 text-right font-medium">Today's Login Users</div>
            </li>

              {/* Active Course  Data */}
              {activeData.activeCourseData.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between mt-5 p-6 border border-gray-300 
                rounded-lg shadow-lg hover:scale-105 transition transform duration-200
                 bg-gradient-to-br from-lime-100 to-green-100"
                >
                  <div className="w-1/4">{item.courseName}</div>
                  <div className="w-1/4 text-center">{item.totalCourses}</div>
                  <div className="w-1/4 text-center">{item.activeCourses}</div>
                  <div className="w-1/4 text-right">
                    {item.todaysLoginUsers}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
