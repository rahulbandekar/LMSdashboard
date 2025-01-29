import React from 'react';
import { FaUser, FaBell, FaEnvelope, FaQuestionCircle } from 'react-icons/fa'; // Importing necessary icons from react-icons


const Icons = () => {
  return (
    <>
      <div className="profile-container">
        {/* Profile Icon */}
        <FaUser className="profile-icon" />
        
        {/* Icons in a flex row */}
        <div className="icon-row">
          <div className="icon-container">
            <FaBell className="icon" />
            <p className="icon-label">Notifications</p>
          </div>
          <div className="icon-container">
            <FaEnvelope className="icon" />
            <p className="icon-label">Mail</p>
          </div>
          <div className="icon-container">
            <FaQuestionCircle className="icon" />
            <p className="icon-label">Help</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icons;
