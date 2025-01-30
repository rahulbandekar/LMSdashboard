import transcriptData from "../Tables/transcriptData";
import { FaFileAlt } from 'react-icons/fa';

export default function TranscriptReport() {
  return (
    <div>
      <div className="max-w-5xl h-full ml-5 mt-10 pt-5 relative  rounded-xl  ">
      <div className="flex relative mr-5 ">
      <FaFileAlt className="ml-5  hover:scale-105 text-blue-500" size={40} />
      <h2 className="text-xl ml-5 font-semibold mb-5 ">Transcript Report</h2>
      </div>

        <ul className="space-y-4">
          {/* Column Headings */}
          <li className="font-bold flex items-center justify-between p-6 shadow-md rounded-lg">
            <div className="w-1/3 font-medium  bg-silver-600 ">Student Name</div>
            <div className="w-1/3 text-center font-medium">Course</div>
            <div className="w-1/3 text-right font-medium">Status</div>
          </li>
          
          {/* List Items */}
          {transcriptData.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between p-4 border border-gray-300
               rounded-lg shadow-lg hover:scale-105 transition transform duration-200"
            >
              {/* Student Name */}
              <div className="flex items-center gap-4 w-1/3">
                <div className="w-10 h-10 bg-teal-400 text-white rounded-full flex items-center justify-center font-bold">
                  {item.studentInitial}
                </div>
                <span className="font-medium">{item.studentName}</span>
              </div>

              {/* Course Name */}
              <div className="w-1/3 text-center">
                <span className="font-medium">{item.course}</span>
              </div>

              {/* Status */}
              <div className="w-1/3 text-right">
                <span
                  className={`font-medium ${
                    item.status === "Completed"
                      ? "text-green-500"
                      : item.status === "Ongoing"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
       
      </div>
     
    </div>
  );
}
