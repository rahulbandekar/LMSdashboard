import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import { Card } from "../components/Card";
import { FaClipboardList, FaFileAlt, FaClock, FaTimesCircle } from "react-icons/fa";
import ActiveList from "../Tables/ActiveList";
import { ResponsivePie } from '@nivo/pie';


export default function SuperAdminDashboard() {

    // Pie chart data
    const analyticsData = [
      {
        "id": "Category A",
        "label": "Category A",
        "value": 40,
        "color": "#FF6384"
      },
      {
        "id": "Category B",
        "label": "Category B",
        "value": 30,
        "color": "#36A2EB"
      },
      {
        "id": "Category C",
        "label": "Category C",
        "value": 30,
        "color": "#FFCE56"
      }
    ];
  


  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
      <div className="grid grid-cols-1 ml-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Card for Total Requirements */}
        <Card
          logo={<FaClipboardList size={24} />}
          count="32"
          text="Total Requirements"
          bgColor="bg-blue-500/50"
        />
        
        {/* Card for Total Transcripts */}
        <Card
          logo={<FaFileAlt size={24} />}
          count="91"
          text="Total Transcripts"
          bgColor="bg-green-500/50"
        />

        {/* Card for Overdue Courses */}
        <Card
          logo={<FaClock size={24} />}
          count="10"
          text="Overdue Courses"
          bgColor="bg-yellow-500/50"
        />

        {/* Card for Expired Courses */}
        <Card
          logo={<FaTimesCircle size={24} />}
          count="4"
          text="Course Expired"
          bgColor="bg-red-500/50"
        />
      </div>
      <div className="lg:col-span-12 pt-4">
          <ActiveList/>
          <div className="p-6 bg-white shadow-md rounded-xl w-full mt-6">
      <h3 className="font-semibold text-lg mb-4">Analytics</h3>
      <div className="w-full h-64">
        <ResponsivePie
          data={analyticsData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={d => d.data.color}
          borderWidth={1}
          borderColor="white"
          enableArcLinkLabels={false}
          enableArcLabels={true}
          arcLabel={(e) => `${e.id}: ${e.value}%`}
        />
      </div>
    </div>

      </div>
      
    </BaseLayout>
  );
}
