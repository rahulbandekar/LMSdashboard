// CourseProgressList.jsx
const CourseProgressList = ({ courses }) => {
    return (
      <div>
        {courses.map((course, index) => (
          <div
            key={index}
            className="m-6 flex items-center justify-between border-b pb-6 rounded-lg shadow-md hover:shadow-xl transition-shadow "
          >
            <div className="flex items-center space-x-4">
              <div className="text-lg font-medium ml-4">{course.name}</div>
            </div>
            <div className="flex items-center">{course.type}</div>
            <div className="w-56 hover:scale-105 transform transition-all">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="h-2.5 mb-4 mr-2 bg-gray-200 rounded-full">
                <div
                  className="h-full  rounded-full"
                  style={{
                    width: `${course.progress}%`,
                    backgroundColor: course.progress >= 75 ? "green" : course.progress >= 50 ? "yellow" : "red",
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CourseProgressList;
  