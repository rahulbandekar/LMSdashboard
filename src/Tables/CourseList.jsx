import { useState } from "react";
import CourseProgressList from "./CourseProgressList";

export default function CourseList() {
  // Sample course data
  const inProgressCourses = [
    { name: "HTML",type:"E-learning", progress: 75 },
    { name: "CSS",type:"E-learning", progress: 50 },
    { name: "JavaScript", type:"E-learning",progress: 90 },
    { name: "C++",type:"E-learning", progress: 65 },
    { name: "JAVA", type:"E-learning",progress: 25 },
  ];

  const classroomCourses = [
    { name: "505", progress: 60 },
    { name: "101", progress: 40 },
    { name: "502", progress: 15 },
    { name: "506", progress: 5 },

  ];

  const transcriptCourses = [
    { name: "Python", progress: 80 },
    { name: "C++", progress: 90 },
    { name: "JAVASCRIPT", progress: 35 },
    { name: "Devops", progress: 50 },

  ];



  // State to track the selected section
  const [selectedSection, setSelectedSection] = useState("in-progress");

  return (
    <div>
      <div className="max-w-full p-6 border-lg bg-silver shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Your Progress Till Now</h2>

        {/* Section Tabs */}
        <div className="flex space-x-6 mb-6">
          <button
            className={`${
              selectedSection === "in-progress" ? "text-blue-500" : "text-gray-600"
            } font-medium hover:text-blue-500 transition-colors`}
            onClick={() => setSelectedSection("in-progress")}
          >
            In Progress
          </button>
          <button
            className={`${
              selectedSection === "classroom" ? "text-blue-500" : "text-gray-600"
            } font-medium hover:text-blue-500 transition-colors`}
            onClick={() => setSelectedSection("classroom")}
          >
            Classroom
          </button>
          <button
            className={`${
              selectedSection === "transcript" ? "text-blue-500" : "text-gray-600"
            } font-medium hover:text-blue-500 transition-colors`}
            onClick={() => setSelectedSection("transcript")}
          >
            Transcript
          </button>
        </div>

       
        

        {/* Content based on selected section */}
        <div className="space-y-6">
          {selectedSection === "in-progress" && (
            <CourseProgressList courses={inProgressCourses} />
          )}

          {selectedSection === "classroom" && (
            <CourseProgressList courses={classroomCourses} />
          )}

          {selectedSection === "transcript" && (
            <CourseProgressList courses={transcriptCourses} />
          )}
        </div>
      </div>
    </div>
  );
}
