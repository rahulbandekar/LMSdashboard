// LearningPlanReport.js
import learningPlanData from "../Tables/learningPlanData";
import { FaGraduationCap } from 'react-icons/fa';

export default function LearningPlanReport() {
  return (
    <div>
      <div className="max-w-5xl h-full ml-5 mt-10 pt-5 relative rounded-xl">
        <div className="flex relative mr-5">
          <FaGraduationCap className="ml-5  hover:scale-105 text-blue-500" size={50} />
          <h2 className="text-xl ml-5 font-semibold mb-5">Learning Plan Report</h2>
        </div>

        <ul className="space-y-4">
          {/* Column Headings */}
          <li className="font-bold flex items-center justify-between p-6 shadow-md rounded-lg">
            <div className="w-1/2 font-medium">Learning Plan</div>
            <div className="w-1/2 text-right font-medium">Progress</div>
          </li>

          {/* List Items */}
          {learningPlanData.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-lg hover:scale-105 transition transform duration-200"
            >
              {/* Learning Plan Name */}
              <div className="w-1/2">
                <span className="font-medium">{item.learningPlan}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-1/2 text-right flex items-center gap-2">
                <div className="relative w-3/4 bg-gray-200 h-4 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-4 bg-green-800 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <span className="font-medium">{item.progress}%</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
