'use client'

import { useState } from 'react'

export default function AdditionalFeatures() {
  const [activeTab, setActiveTab] = useState('students')

  const features = {
    students: {
      title: "Student Management",
      description: "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
      points: [
        "Digital student profiles with complete academic history",
        "Automated enrollment and registration process",
        "Parent portal access with real-time updates",
        "Student performance tracking and analytics",
        "Digital document management for student records",
        "Custom fields for additional student information",
        "Bulk student data import/export capabilities",
        "Student behavior and disciplinary record tracking"
      ]
    },
    academics: {
      title: "Academic Management",
      description: "Complete academic management system for curriculum planning, assessments, and performance tracking",
      points: [
        "Curriculum and lesson planning tools",
        "Online assessment and examination system",
        "Automated grading and report cards",
        "Homework and assignment management",
        "Resource library and content sharing",
        "Teacher evaluation and feedback",
        "Academic calendar management",
        "Parent-teacher communication portal"
      ]
    },
    finance: {
      title: "Financial Management",
      description: "Comprehensive financial management system for fee collection, expenses, and budgeting",
      points: [
        "Fee structure and billing management",
        "Online payment processing",
        "Expense tracking and management",
        "Financial reporting and analytics",
        "Payroll management system",
        "Budget planning and control",
        "Invoice and receipt generation",
        "Financial document management"
      ]
    },
    analytics: {
      title: "Analytics Dashboard",
      description: "Powerful analytics tools for data-driven decision making and performance monitoring",
      points: [
        "Real-time performance analytics",
        "Customizable dashboard views",
        "Attendance and enrollment trends",
        "Financial analytics and forecasting",
        "Academic performance metrics",
        "Student behavior analytics",
        "Resource utilization reports",
        "Comparative analysis tools"
      ]
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">✨ Additional Features</h2>
          <p className="mt-4 text-xl text-gray-600">All-in-One School Management Platform</p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            Streamline your entire school operations with our comprehensive suite of integrated modules designed specifically for modern educational institutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-12 flex justify-center space-x-4">
          {Object.keys(features).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">
              {features[activeTab as keyof typeof features].title}
            </h3>
            <p className="text-gray-600">
              {features[activeTab as keyof typeof features].description}
            </p>
            <div className="space-y-4">
              {features[activeTab as keyof typeof features].points.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      {index + 1}
                    </div>
                  </div>
                  <p className="ml-4 text-gray-600">{point}</p>
                </div>
              ))}
            </div>
            <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500">
              Learn more about {features[activeTab as keyof typeof features].title}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Image/Illustration Section */}
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management illustration
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 