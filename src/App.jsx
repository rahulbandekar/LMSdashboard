
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';
// import Courses from './pages/Courses';
// import Tasks from './pages/Tasks';
// import Groups from './pages/Groups';
// import Settings from './pages/Settings';
// import Logout from './pages/Logout';
import AdminDashboard from './pages/AdminDashboard';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
// import Student from './pages/Student';


const App = () => {
  return (

    <Routes>
      <Route path="/" element={<StudentDashboard />} />
      {/* <Route path="/courses" element={<Courses />} /> */}
      {/* <Route path="/tasks" element={<Tasks />} /> */}
      {/* <Route path="/groups" element={<Groups />} /> */}
      {/* <Route path="/settings" element={<Settings />} /> */}
      {/* <Route path="/logout" element={<Logout />} /> */}
      <Route path="/super-admin" element={<SuperAdminDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      {/* <Route path="/student" element={<Student />} /> */}
    </Routes>

  );
};

export default App;