import React from "react";
import { Bar } from "react-chartjs-2";

const GraphCard = ({ title, data, options }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Card Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>

      {/* Chart Container */}
      <div className="mt-4 overflow-x-auto h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default GraphCard;
