import React, { useState, useEffect } from "react";
import StatCard from "../components/StatCard";
import QuickAction from "../components/QuickAction";
import { FaUsers, FaTasks, FaBook } from "react-icons/fa";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, TimeScale } from "chart.js";
import "chartjs-adapter-date-fns";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import GraphCard from "../components/GraphCard";
import BaseLayout from "../layouts/BaseLayout";
import ComplianceReport from "../Tables/ComplianceReport";
import TranscriptReport from "../Tables/TranscriptReport";
import LearningPlanReport from "../Tables/LearningPlanReport";


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, TimeScale);

export default function AdminDashboard() {
  const [date, setDate] = useState(dayjs());

  const data = {
    labels: ["Complete", "Incomplete"],
    datasets: [
      {
        label: "Tasks",
        data: [75, 25], // Example data
        backgroundColor: ["#4CAF50", "#F4641C"],
        hoverBackgroundColor: ["#45A049", "#D9531A"],
      },
    ],
  };

   // Data for User Course Distribution
   const userCourseData = {
    labels: ["User 1", "User 2", "User 3", "User 4"],
    datasets: [
      {
        label: "Number of Courses",
        data: [5, 1, 2, 3],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  // Data for Learning Plan Progress
  const learningPlanData = {
    labels: ["MY", "Video Editing"],
    datasets: [
      {
        label: "Progress Percentage",
        data: [0, 5],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  // Data for Expirations Report
  const expirationsData = {
    labels: ["Expired", "Expiring Soon", "Valid"],
    datasets: [
      {
        label: "Expirations",
        data: [10, 20, 70], // Example data
        backgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
      },
    ],
  };

  // Data for Announcements Report
  const announcementsData = {
    labels: ["2024-10-01", "2024-11-01", "2024-12-01", "2025-01-01"],
    datasets: [
      {
        label: "Regular Announcements",
        data: [5, 10, 15, 20],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Important Announcements",
        data: [2, 4, 6, 8],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

   // Data for Requested Training Report
   const requestedTrainingData = {
    labels: ["Requested", "Not Requested"],
    datasets: [
      {
        label: "Requested Training",
        data: [30, 70], // Example data
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  // Data for Top eLearning Courses
  const topCoursesdata = {
    labels: ["HTML", "JAVA", "CSS", "JavaScript", "C++"],
    datasets: [
      {
        label: "Number of Users",
        data: [10, 50, 20, 30, 40],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Data for Compliance Report
  const complianceData = {
    labels: ["Admin User", "John", "Jane", "Doe"],
    datasets: [
      {
        label: "Compliance",
        data: [48, 20, 14, 29, 1], // Example data
        backgroundColor: ["#F4641C"],
        hoverBackgroundColor: ["#D9531A"],
      },
    ],
  };

  // Shared Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { beginAtZero: true },
      y: { 
        beginAtZero: true, max: 100, ticks: { stepSize: 50, callback: (value) => `${value}%` },
        title: {
          display: true,
          text: 'Progress Percentage',
      },
    },
  },
  };

  const transcriptOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { 
        beginAtZero: true, 
        title: {
          display: true,
          text: 'Users',
        },
      },
      y: { 
        beginAtZero: true, ticks: { stepSize: 1, precision: 0 },
        title: {
          display: true,
          text: 'Number of Courses',
      },
    },
  },
  };

    // Options for Announcements Report
    const announcementsOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'month',
            tooltipFormat: 'll',
          },
          title: {
            display: true,
            text: 'Date',
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Announcements',
          },
        },
      },
    };

    // Options for Requested Training Report
  const requestedTrainingOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'start',
        labels: {
          boxWidth: 20,
          padding: 20,
        },
      },
    },
  };

  // options for top elarning courses
  const topCoursesOptions ={
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Courses',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Users',
        },
      },
    }
  }

    // Options for Compliance Report
    const complianceOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: (value) => `${value}%`,
          },
          title: {
            display: true,
            text: 'Percentage',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Users',
          },
        },
      },
    };

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
          {/* Chart Section */}
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Company Overview</h3>
            <div className="w-full h-64">
            <Pie data={data} />
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
            <GraphCard title="Transcript Report" data={userCourseData} options={transcriptOptions} />
            <GraphCard title="Learning Plan Report" data={learningPlanData} options={options} />
            <div className="p-6 bg-white shadow-md rounded-xl w-full">
              <h3 className="font-semibold text-lg mb-4">Expirations Report</h3>
              <div className="w-full h-64">
                <Pie data={expirationsData} />
              </div>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl w-full">
              <h3 className="font-semibold text-lg mb-4">Top eLearning Cources</h3>
              <div className="w-full h-64">
                <Bar data={topCoursesdata} options={topCoursesOptions} />
              </div>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl w-full">
              <h3 className="font-semibold text-lg mb-4">Announcements Report</h3>
              <div className="w-full h-64">
                <Bar data={announcementsData} options={announcementsOptions} />
              </div>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl w-full">
              <h3 className="font-semibold text-lg mb-4">Requested Training Report</h3>
              <div className="w-full h-64">
                <Pie data={requestedTrainingData} options={requestedTrainingOptions}/>
              </div>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl w-full">
              <h3 className="font-semibold text-lg mb-4">Compliance Report</h3>
              <div className="w-full h-64">
                <Bar data={complianceData} options={complianceOptions} />
              </div>
            </div>
            <ComplianceReport/>
            <TranscriptReport/>
            <LearningPlanReport/>
          </div>
          
        </div>
      </div>
    </BaseLayout>

  );
}