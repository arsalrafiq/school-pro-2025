'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { createSchool } from './actions'

export default function SchoolRegistration() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    schoolName: '',
    logo: null as File | null,
    previewUrl: '/default-school-logo.png'
  })

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 1024 * 1024) {
        alert('File size must be less than 1MB')
        return
      }

      setFormData(prev => ({
        ...prev,
        logo: file,
        previewUrl: URL.createObjectURL(file)
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.schoolName.trim()) {
      alert('Please enter school name')
      return
    }

    try {
      setIsLoading(true)
      const result = await createSchool({
        name: formData.schoolName,
        logo: formData.logo || undefined
      })

      if (result.success) {
        router.push('/dashboard')
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      console.error('Registration failed:', error)
      alert('Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to School Pro</h1>
          <p className="text-sm text-gray-600 mt-1">
            Complete your school's profile to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* School Logo Upload */}
          <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
            <div className="relative w-24 h-24 mb-3">
              <Image
                src={formData.previewUrl}
                alt="School Logo"
                fill
                className="rounded-full object-cover border-2 border-gray-200"
              />
              <label 
                htmlFor="logo-upload"
                className="absolute -bottom-2 -right-2 p-2 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <input
                  id="logo-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleLogoChange}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">Max size: <span className="text-orange-500">1MB</span></p>
          </div>

          {/* School Name Input */}
          <div>
            <input
              type="text"
              value={formData.schoolName}
              onChange={(e) => setFormData(prev => ({ ...prev, schoolName: e.target.value }))}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter school name"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-white transition-all
              ${isLoading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Registering...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Register School</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
} 