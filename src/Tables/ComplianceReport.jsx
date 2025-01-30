// ComplianceReport.js
import complianceData from "../Tables/complianceData";
import { FaCheckSquare } from "react-icons/fa";


export default function ComplianceReport() {
  return (
    <div>
      <div className=" max-w-xl h-full ml-5 mt-10 pt-5 relative rounded-xl ">
        <div className="mb-5 flex relative mr-5  ">
          <FaCheckSquare className="ml-5  hover:scale-105 text-blue-500" size={40} />
          <h2 className="text-xl ml-5 font-semibold mb-5  ">Compliance Report</h2>
        </div>

        <ul className="space-y-4 ">
          {/* Column Headings */}
          <li className="font-bold flex items-center justify-between p-6 shadow-md rounded-lg ">
            <div className="w-1/3 font-medium">Driver Name</div>
            <div className="w-1/3 text-center font-medium">Status</div>
            <div className="w-1/3 text-right font-medium">Progress</div>
          </li>
          
          {/* List Items */}
          {complianceData.map((item) => (
            <li
              key={item.id}
              className=" flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-lg hover:scale-105 transition transform duration-200"
            >
              {/* Driver Name with Initials */}
              <div className="flex items-center gap-4 w-1/3">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  {item.studentInitial}
                </div>
                <span className="font-medium">{item.driverName}</span>
              </div>

              {/* Status */}
              <div className={`w-1/3 text-center font-medium ${item.status === "Compliant" ? "text-green-500" : "text-red-500"}`}>
                {item.status}
              </div>

              {/* Progress Bar */}
              <div className="w-1/3 text-right flex items-center gap-2">
                <div className="relative w-3/4 bg-gray-200 h-4 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-4 bg-blue-800 rounded-full"
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
