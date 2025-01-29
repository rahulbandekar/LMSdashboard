// MenuBar.js
import React from 'react';
import './dashboard.css'; // dashboard.css file

const Dashboard = () => {
  return (
    <>
    
    <div className="menu-bar">
       
    <h1 className='lms'>LMS</h1>


        <h2>Overview</h2>
      <ul>
        <li onClick={() => alert('dashboard clicked')}>Dashboard</li>
        <li>Cources</li>
        <li>Tasks</li>
        <li>Groups</li>
        <li>Assignments</li>
      </ul>
      <h2>Settings</h2>
      <ul>
        <li>Settings</li>
        <li style={{ color: 'red' }}>Logout</li>
        </ul>
    </div>
    </>
  );
};

export default Dashboard;
