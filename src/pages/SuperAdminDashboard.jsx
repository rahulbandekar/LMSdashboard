import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import { Card } from "../components/Card";
import {
  FaClipboardList,
  FaFileAlt,
  FaClock,
  FaExclamationCircle,
} from "react-icons/fa";
import ActiveList from "../Tables/ActiveList";
import { ResponsivePie } from "@nivo/pie";

export default function SuperAdminDashboard() {
  // Pie chart data
  const analyticsData = [
    {
      id: "Category A",
      label: "Category A",
      value: 40,
      color: "#FF6384",
    },
    {
      id: "Category B",
      label: "Category B",
      value: 30,
      color: "#36A2EB",
    },
    {
      id: "Category C",
      label: "Category C",
      value: 30,
      color: "#FFCE56",
    },
  ];

  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
      <div className="grid ml-2 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Card for Total Requirements */}
        <Card
          logo={<FaClipboardList size={30} />}
          count="32"
          text="Total Requirements"
          bgColor="bg-gradient-to-br from-orange-300 to-teal-950"
        />

        {/* Card for Total Transcripts */}
        <Card
          logo={<FaFileAlt size={30} />}
          count="91"
          text="Total Transcripts"
          bgColor="bg-gradient-to-br from-cyan-950 to-green-300"
        />

        {/* Card for Overdue Courses */}
        <Card
          logo={<FaClock size={30} />}
          count="10"
          text="Overdue Courses"
          bgColor="bg-gradient-to-br from-yellow-700 to-amber-2000"
        />

        {/* Card for Expired Courses */}
        <Card
          logo={<FaExclamationCircle size={30} />}
          count="4"
          text="Course Expired"
          bgColor="bg-gradient-to-br from-red-700 to-rose-300"
        />
      </div>
      <div className="flex w-full gap-x-6 pt-4">
        {/* Active List on Left */}
        <div className="w-2/3">
          <ActiveList />
        </div>

        {/* Analytics on Right */}
        <div className="w-1/3 p-6 bg-white shadow-md pt-4rounded-xl">
          <h3 className="font-semibold text-lg mb-4">Analytics</h3>
          <div className="w-full h-64">
            <ResponsivePie
              data={analyticsData}
              margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
              innerRadius={0.5}
              padAngle={2}
              cornerRadius={5}
              activeOuterRadiusOffset={8}
              colors={{ datum: "data.color" }}
              borderWidth={2}
              borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor="#545333"
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
