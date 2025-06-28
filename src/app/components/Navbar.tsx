'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showFeatures, setShowFeatures] = useState(false)

  const features = [
    {
      title: "Student Management",
      description: "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
      icon: "👥"
    },
    {
      title: "Academic Management",
      description: "Streamline curriculum planning, examinations, grading, and report card generation in one unified system",
      icon: "📚"
    },
    {
      title: "Communication Hub",
      description: "Integrated messaging system with multi-channel notifications for seamless school-wide communication",
      icon: "💬"
    },
    {
      title: "Financial Management",
      description: "Complete fee management system with online payments, invoicing, and comprehensive financial reporting",
      icon: "💰"
    },
    {
      title: "Staff Management",
      description: "Efficient tools for managing staff records, attendance, performance evaluation, and payroll processing",
      icon: "👨‍💼"
    },
    {
      title: "Transport Management",
      description: "Real-time transport tracking, route management, and automated notifications for safe student transportation",
      icon: "🚌"
    },
    {
      title: "Analytics & Reports",
      description: "Powerful analytics tools for data-driven decisions with customizable reporting and insights",
      icon: "📊"
    },
    {
      title: "Resource Management",
      description: "Digital library system, inventory tracking, and facility scheduling in one integrated platform",
      icon: "📦"
    },
    {
      title: "Attendance System",
      description: "Automated attendance tracking for students and staff with instant notification capabilities",
      icon: "✅"
    },
    {
      title: "Examination Portal",
      description: "Complete examination management system from scheduling to result publication with secure access",
      icon: "📝"
    },
    {
      title: "Notice Board",
      description: "Digital notice board for announcements, events, and important updates with targeted distribution",
      icon: "📢"
    },
    {
      title: "Security & Access",
      description: "Role-based access control with data encryption and secure backups for complete peace of mind",
      icon: "🔒"
    }
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
    setShowFeatures(false)
  }

  if (!mounted) {
    return (
      <nav className="bg-white fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <img src="/logo.png" alt="SchoolPro" width={50} height={50} />
                <span className="text-2xl font-bold text-blue-600">SchoolPro</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">SchoolPro</span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <div className="relative">
                <button 
                  onMouseEnter={() => setShowFeatures(true)}
                  onClick={() => setShowFeatures(!showFeatures)}
                  className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium inline-flex items-center"
                >
                  Features
                  <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showFeatures && (
                  <div 
                    onMouseLeave={() => setShowFeatures(false)}
                    className="absolute left-0 mt-2 w-[900px] bg-white rounded-lg shadow-lg p-6"
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Features</h3>
                      <p className="text-sm text-gray-500">View all</p>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      {features.map((feature, index) => (
                        <div key={index} className="group p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                          <div className="flex items-start space-x-3">
                            <span className="text-2xl">{feature.icon}</span>
                            <div>
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">
                                {feature.title}
                              </h4>
                              <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                        Get Started
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/login" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              Log in
            </Link>
            <Link href="/demo" 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Book Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {features.map((feature, index) => (
              <div key={index} className="px-3 py-2 hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{feature.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{feature.title}</h4>
                    <p className="mt-1 text-xs text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium"
            >
              Contact
            </button>
            <Link href="/login" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium">
              Log in
            </Link>
            <Link href="/demo" 
              className="block px-3 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md font-medium">
              Book Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 