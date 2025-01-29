import React from 'react';
import { FaUser, FaBell, FaEnvelope, FaQuestionCircle } from 'react-icons/fa'; // Importing the FaUser icon from react-icons
import './profile.css';

const Profile = () => {
  return (
    <>
    
    <div className="profile-container">
      <FaUser className="profile-icon" />
      </div>
      <div className='icon-row'>  
        <div><FaBell className="icon" /></div> 
              <div><FaEnvelope className="icon" /></div>    
                <div><FaQuestionCircle className="icon" /></div>  
      
      </div>

      
      
     
    
     
    
    
        </>
    
    
    
  );
};

export default Profile;
