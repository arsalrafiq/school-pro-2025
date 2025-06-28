'use client'

import { useState } from 'react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const features = [
    "Complete Student Management System",
    "Academic & Examination Tools",
    "Parent-Teacher Communication Platform",
    "Basic Financial Management",
    "Attendance Tracking System",
    "Real-time Notifications",
    "24/7 Customer Support",
    "Regular System Updates",
    "Secure Data Backup",
    "Mobile App Access",
    "Custom Report Generation",
    "API Integration Support"
  ]

  const monthlyPrice = 4
  const annualPrice = Math.round(monthlyPrice * 12 * 0.83) / 12 // 17% discount

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">Transparent, Per-Student Pricing</p>
          <p className="mt-4 text-lg text-gray-600">
            Simple, predictable pricing that grows with your institution. All features included, no hidden fees. Special discounts available for large institutions.
          </p>
          {/* Pricing Toggle */}
          <div className="mt-8 inline-flex items-center space-x-4 bg-white p-1 rounded-full">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${!isAnnual 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center
                ${isAnnual 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'}`}
            >
              Annually
              <span className="ml-2 text-xs px-2 py-0.5 bg-green-100 text-green-600 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="lg:sticky lg:top-24 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Everything you need to manage your school efficiently
              </h3>
              <p className="text-gray-600 text-lg">
                Get started with our comprehensive school management system. All features included, no hidden fees.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pay per student, scale as you grow
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All features included in every plan
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free onboarding and training
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 customer support
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="px-8 pt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">School License</h3>
                  <span className="px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full font-medium">
                    Most Popular
                  </span>
                </div>
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      ${isAnnual ? annualPrice : monthlyPrice}
                    </span>
                    <span className="text-lg text-gray-500 ml-2">/student/month</span>
                  </div>
                  {isAnnual && (
                    <p className="mt-2 text-sm text-green-600 font-medium">
                      Billed annually (${(annualPrice * 12).toFixed(2)}/student)
                    </p>
                  )}
                </div>
                <p className="mt-4 text-gray-600">
                  Everything you need to manage your school efficiently and effectively.
                </p>
              </div>
              <div className="px-8 pt-8 pb-12">
                <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 space-y-4">
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
                    Start Free Trial
                  </button>
                  <p className="text-sm text-gray-500 text-center">
                    14-day free trial • No credit card required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 