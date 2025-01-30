import React, { useState } from "react";
import StatCard from "../components/StatCard";
import QuickAction from "../components/QuickAction";
import { FaUsers, FaTasks, FaBook } from "react-icons/fa";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import BaseLayout from "../layouts/BaseLayout";
import ComplianceReport from "../Tables/ComplianceReport";
import TranscriptReport from "../Tables/TranscriptReport";
import LearningPlanReport from "../Tables/LearningPlanReport";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  TimeScale
);

export default function AdminDashboard() {
  const [date, setDate] = useState(dayjs());

  const data = [
    { id: "Complete", label: "Complete", value: 75, color: "#4CAF50" },
    { id: "Incomplete", label: "Incomplete", value: 25, color: "#F4641C" },
  ];

  const userCourseData = [
    { user: "User 1", courses: 5 },
    { user: "User 2", courses: 1 },
    { user: "User 3", courses: 2 },
    { user: "User 4", courses: 3 },
  ];

  // Data for Learning Plan Progress
  const learningPlanData = [
    { plan: "MY", progress: 0 },
    { plan: "Video Editing", progress: 5 },
  ];

  // // Data for User Course Distribution
  // const userCourseData = {
  //   labels: ["User 1", "User 2", "User 3", "User 4"],
  //   datasets: [
  //     {
  //       label: "Number of Courses",
  //       data: [5, 1, 2, 3],
  //       backgroundColor: "rgba(54, 162, 235, 0.6)",
  //     },
  //   ],
  // };

  // // Data for Learning Plan Progress
  // const learningPlanData = {
  //   labels: ["MY", "Video Editing"],
  //   datasets: [
  //     {
  //       label: "Progress Percentage",
  //       data: [0, 5],
  //       backgroundColor: "rgba(255, 99, 132, 0.6)",
  //     },
  //   ],
  // };

    // Data for Expirations Report
    const expirationsData = [
      { id: "Expired", label: "Expired", value: 10, color: "#FF6384" },
      { id: "Expiring Soon", label: "Expiring Soon", value: 20, color: "#FFCE56" },
      { id: "Valid", label: "Valid", value: 70, color: "#36A2EB" },
    ];
  
    // Data for Top eLearning Courses
    const topCoursesdata = [
      { course: "HTML", users: 10 },
      { course: "JAVA", users: 50 },
      { course: "CSS", users: 20 },
      { course: "JavaScript", users: 30 },
      { course: "C++", users: 40 },
    ];
  
    // Data for Announcements Report
    const announcementsData = [
      { date: "2024-10-01", regular: 5, important: 2 },
      { date: "2024-11-01", regular: 10, important: 4 },
      { date: "2024-12-01", regular: 15, important: 6 },
      { date: "2025-01-01", regular: 20, important: 8 },
    ];

  // // Data for Expirations Report
  // const expirationsData = {
  //   labels: ["Expired", "Expiring Soon", "Valid"],
  //   datasets: [
  //     {
  //       label: "Expirations",
  //       data: [10, 20, 70], // Example data
  //       backgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
  //       hoverBackgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
  //     },
  //   ],
  // };

  // // Data for Announcements Report
  // const announcementsData = {
  //   labels: ["2024-10-01", "2024-11-01", "2024-12-01", "2025-01-01"],
  //   datasets: [
  //     {
  //       label: "Regular Announcements",
  //       data: [5, 10, 15, 20],
  //       backgroundColor: "rgba(75, 192, 192, 0.6)",
  //     },
  //     {
  //       label: "Important Announcements",
  //       data: [2, 4, 6, 8],
  //       backgroundColor: "rgba(255, 159, 64, 0.6)",
  //     },
  //   ],
  // };

  // // Data for Top eLearning Courses
  // const topCoursesdata = {
  //   labels: ["HTML", "JAVA", "CSS", "JavaScript", "C++"],
  //   datasets: [
  //     {
  //       label: "Number of Users",
  //       data: [10, 50, 20, 30, 40],
  //       backgroundColor: "rgba(75, 192, 192, 0.6)",
  //     },
  //   ],
  // };

  const requestedTrainingData = [
    { id: "Requested", label: "Requested", value: 30, color: "#36A2EB" },
    {
      id: "Not Requested",
      label: "Not Requested",
      value: 70,
      color: "#FF6384",
    },
  ];

  // Data for Compliance Report
  const complianceData = [
    { user: "Admin User", compliance: 48 },
    { user: "John", compliance: 20 },
    { user: "Jane", compliance: 14 },
    { user: "Doe", compliance: 29 },
  ];

  // // Data for Requested Training Report
  //   const requestedTrainingData = {
  //     labels: ["Requested", "Not Requested"],
  //     datasets: [
  //       {
  //         label: "Requested Training",
  //         data: [30, 70], // Example data
  //         backgroundColor: ["#36A2EB", "#FF6384"],
  //         hoverBackgroundColor: ["#36A2EB", "#FF6384"],
  //       },
  //     ],
  //   };

  // // Data for Compliance Report
  // const complianceData = {
  //   labels: ["Admin User", "John", "Jane", "Doe"],
  //   datasets: [
  //     {
  //       label: "Compliance",
  //       data: [48, 20, 14, 29, 1], // Example data
  //       backgroundColor: ["#F4641C"],
  //       hoverBackgroundColor: ["#D9531A"],
  //     },
  //   ],
  // };

  // // Shared Chart Options
  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     x: { beginAtZero: true },
  //     y: {
  //       beginAtZero: true,
  //       max: 100,
  //       ticks: { stepSize: 50, callback: (value) => `${value}%` },
  //       title: {
  //         display: true,
  //         text: "Progress Percentage",
  //       },
  //     },
  //   },
  // };

  // const transcriptOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     x: {
  //       beginAtZero: true,
  //       title: {
  //         display: true,
  //         text: "Users",
  //       },
  //     },
  //     y: {
  //       beginAtZero: true,
  //       ticks: { stepSize: 1, precision: 0 },
  //       title: {
  //         display: true,
  //         text: "Number of Courses",
  //       },
  //     },
  //   },
  // };

  // // Options for Announcements Report
  // const announcementsOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     x: {
  //       type: "time",
  //       time: {
  //         unit: "month",
  //         tooltipFormat: "ll",
  //       },
  //       title: {
  //         display: true,
  //         text: "Date",
  //       },
  //     },
  //     y: {
  //       beginAtZero: true,
  //       title: {
  //         display: true,
  //         text: "Number of Announcements",
  //       },
  //     },
  //   },
  // };

  // // Options for Requested Training Report
  // const requestedTrainingOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       display: true,
  //       position: "top",
  //       align: "start",
  //       labels: {
  //         boxWidth: 20,
  //         padding: 20,
  //       },
  //     },
  //   },
  // };

  // // options for top elarning courses
  // const topCoursesOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     x: {
  //       beginAtZero: true,
  //       title: {
  //         display: true,
  //         text: "Courses",
  //       },
  //     },
  //     y: {
  //       beginAtZero: true,
  //       title: {
  //         display: true,
  //         text: "Number of Users",
  //       },
  //     },
  //   },
  // };

  // // Options for Compliance Report
  // const complianceOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //       max: 100,
  //       ticks: {
  //         callback: (value) => `${value}%`,
  //       },
  //       title: {
  //         display: true,
  //         text: "Percentage",
  //       },
  //     },
  //     x: {
  //       title: {
  //         display: true,
  //         text: "Users",
  //       },
  //     },
  //   },
  // };

  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Main Grid Layout */}
      <div className="grid gap-6 lg:grid-cols-12 items-stretch">
        {/* Stats Section */}
        <div className="grid gap-6 lg:col-span-3">
          <StatCard
            title="Active Users"
            value="4"
            icon={<FaUsers />}
            bgColor="bg-blue-500"
            textColor="text-blue-500"
          />
          <StatCard
            title="Assigned"
            value="46"
            icon={<FaTasks />}
            bgColor="bg-red-500"
            textColor="text-red-500"
          />
          <StatCard
            title="Courses"
            value="8"
            icon={<FaBook />}
            bgColor="bg-green-500"
            textColor="text-green-500"
          />
        </div>

        {/* Chart and Calendar */}
        <div className="grid gap-6 lg:col-span-6 lg:grid-cols-2">
        <div className="p-6 bg-white shadow-md rounded-xl">
      <h3 className="font-semibold text-lg mb-4">Company Overview</h3>
      <div className="w-full h-64">
        <ResponsivePie
          data={data}
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
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        />
      </div>
    </div>
          {/* Calendar Section */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-bold mb-4">Calendar</h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={date}
                onChange={(newValue) => setDate(newValue)}
                className="max-w-full"
              />
            </LocalizationProvider>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="col-span-3">
          <div className="p-6 bg-white shadow-md h-full rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
            <div className="grid gap-4 grid-cols-1 py-6">
              <QuickAction label="Add User" onClick={() => alert("Add User")} />
              <QuickAction
                label="Assign Task"
                onClick={() => alert("Assign Task")}
              />
              <QuickAction
                label="Run Report"
                onClick={() => alert("Run Report")}
              />
              <QuickAction
                label="View Users"
                onClick={() => alert("View Users")}
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-12 pt-4">
          <div className="grid gap-6 lg:grid-cols-2">
               {/* User Course Distribution */}
      <div className="p-6 bg-white shadow-md rounded-xl w-full">
        <h3 className="font-semibold text-lg mb-4">Transcript Report</h3>
        <div className="w-full h-64">
          <ResponsiveBar
            data={userCourseData}
            keys={["courses"]}
            indexBy="user"
            margin={{ top: 40, right: 40, bottom: 40, left: 50 }}
            padding={0.3}
            colors="rgba(54, 162, 235, 0.6)"
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Users",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Number of Courses",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          />
        </div>
      </div>

      {/* Learning Plan Progress */}
      <div className="p-6 bg-white shadow-md rounded-xl w-full">
        <h3 className="font-semibold text-lg mb-4">Learning Plan Report</h3>
        <div className="w-full h-64">
          <ResponsiveBar
            data={learningPlanData}
            keys={["progress"]}
            indexBy="plan"
            margin={{ top: 40, right: 40, bottom: 40, left: 50 }}
            padding={0.3}
            colors="rgba(255, 99, 132, 0.6)"
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Learning Plans",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Progress (%)",
              legendPosition: "middle",
              legendOffset: -40,
              tickValues: [0, 50, 100], // Step size of 50%
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          />
        </div>
      </div>
            {/* Expirations Report */}
      <div className="p-6 bg-white shadow-md rounded-xl w-full">
        <h3 className="font-semibold text-lg mb-4">Expirations Report</h3>
        <div className="w-full h-64">
          <ResponsivePie
            data={expirationsData}
            margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
            innerRadius={0.5}
            padAngle={1}
            cornerRadius={5}
            activeOuterRadiusOffset={8}
            colors={{ datum: "data.color" }}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333"
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          />
        </div>
      </div>

      {/* Top eLearning Courses */}
      <div className="p-6 bg-white shadow-md rounded-xl w-full">
        <h3 className="font-semibold text-lg mb-4">Top eLearning Courses</h3>
        <div className="w-full h-64">
          <ResponsiveBar
            data={topCoursesdata}
            keys={["users"]}
            indexBy="course"
            margin={{ top: 40, right: 40, bottom: 40, left: 50 }}
            padding={0.3}
            colors="#4BC0C0"
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Courses",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Number of Users",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          />
        </div>
      </div>

      {/* Announcements Report */}
      <div className="p-6 bg-white shadow-md rounded-xl w-full">
        <h3 className="font-semibold text-lg mb-4">Announcements Report</h3>
        <div className="w-full h-64">
          <ResponsiveBar
            data={announcementsData}
            keys={["regular", "important"]}
            indexBy="date"
            margin={{ top: 40, right: 40, bottom: 40, left: 50 }}
            padding={0.3}
            colors={["#4BC0C0", "#FF9F40"]}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Date",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Number of Announcements",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            
          />
        </div>
      </div>
            <div className="p-6 bg-white shadow-md rounded-xl w-full">
              <h3 className="font-semibold text-lg mb-4">
                Requested Training Report
              </h3>
              <div className="w-full h-64">
                <ResponsivePie
                  data={requestedTrainingData}
                  margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
                  innerRadius={0.5}
                  padAngle={1}
                  cornerRadius={5}
                  activeOuterRadiusOffset={8}
                  colors={{ datum: "data.color" }}
                  borderWidth={1}
                  borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                />
              </div>
            </div>

            {/* Compliance Report */}
            <div className="p-6 bg-white shadow-md rounded-xl w-full">
              <h3 className="font-semibold text-lg mb-4">Compliance Report</h3>
              <div className="w-full h-64">
                <ResponsiveBar
                  data={complianceData}
                  keys={["compliance"]}
                  indexBy="user"
                  margin={{ top: 40, right: 40, bottom: 40, left: 50 }}
                  padding={0.3}
                  colors="#F4641C"
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Users",
                    legendPosition: "middle",
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Percentage",
                    legendPosition: "middle",
                    legendOffset: -40,
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                  }}
                />
              </div>
            </div>
            <ComplianceReport />
            <TranscriptReport />
            <LearningPlanReport />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
