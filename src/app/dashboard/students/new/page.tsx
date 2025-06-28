'use client';

import { useState } from 'react';
import { ArrowLeftIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ParentForm from '@/components/dashboard/ParentForm';
import ClassForm from '@/components/dashboard/ClassForm';
import StreamForm from '@/components/dashboard/StreamForm';

interface StudentFormData {
  firstName: string;
  lastName: string;
  email: string;
  parent: string;
  class: string;
  stream: string;
  phone: string;
  nationality: string;
  password: string;
  state: string;
  birthCertNo: string;
  religion: string;
  gender: string;
  dateOfBirth: string;
  rollNo: string;
  regNo: string;
  admissionDate: string;
  address: string;
  profileImage: File | null;
}

const SAMPLE_PARENTS = [
  { id: 1, name: 'Robert Doe', relationship: 'Father' },
  { id: 2, name: 'Mary Smith', relationship: 'Mother' },
  { id: 3, name: 'John Wilson', relationship: 'Guardian' }
];

const SAMPLE_CLASSES = [
  { id: 1, name: 'Class 5' },
  { id: 2, name: 'Class 6' },
  { id: 3, name: 'Class 7' }
];

const SAMPLE_STREAMS = [
  { id: 1, name: 'A', classId: 1 },
  { id: 2, name: 'B', classId: 1 },
  { id: 3, name: 'C', classId: 1 }
];

export default function NewStudentPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<StudentFormData>({
    firstName: '',
    lastName: '',
    email: '',
    parent: '',
    class: '',
    stream: '',
    phone: '',
    nationality: 'Uganda',
    password: '',
    state: '',
    birthCertNo: '',
    religion: '',
    gender: '',
    dateOfBirth: '',
    rollNo: '',
    regNo: '',
    admissionDate: '',
    address: '',
    profileImage: null
  });

  const [isParentFormOpen, setIsParentFormOpen] = useState(false);
  const [isClassFormOpen, setIsClassFormOpen] = useState(false);
  const [isStreamFormOpen, setIsStreamFormOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleParentSave = (parentData: any) => {
    console.log('Parent data:', parentData);
    setFormData(prev => ({ ...prev, parent: parentData.firstName + ' ' + parentData.lastName }));
    setIsParentFormOpen(false);
  };

  const handleClassSave = (classData: any) => {
    console.log('Class data:', classData);
    setFormData(prev => ({ ...prev, class: classData.name }));
    setIsClassFormOpen(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 1024 * 1024) { // 1MB limit
      setFormData(prev => ({ ...prev, profileImage: file }));
    } else {
      alert('Please select an image under 1MB');
    }
  };

  const handleStreamSave = (streamData: any) => {
    console.log('Stream data:', streamData);
    setFormData(prev => ({ ...prev, stream: streamData.name }));
    setIsStreamFormOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white p-4 shadow rounded-lg">
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard/students"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-medium">Create Student</h1>
        </div>
        <div className="flex space-x-3">
          <Link
            href="/dashboard/students"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Close
          </Link>
          <button
            type="submit"
            form="student-form"
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Student
          </button>
        </div>
      </div>

      <form id="student-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Student First Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Parent</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <select
                className="flex-1 block w-full border border-gray-300 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.parent}
                onChange={(e) => setFormData({...formData, parent: e.target.value})}
              >
                <option value="">Select a parent</option>
                {SAMPLE_PARENTS.map(parent => (
                  <option key={parent.id} value={parent.id}>
                    {parent.name} ({parent.relationship})
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => setIsParentFormOpen(true)}
                className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">State/Village</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.state}
              onChange={(e) => setFormData({...formData, state: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Gender</label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.gender}
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Student Last Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Class</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <select
                className="flex-1 block w-full border border-gray-300 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.class}
                onChange={(e) => {
                  setFormData({...formData, class: e.target.value, stream: ''});
                }}
              >
                <option value="">Select class</option>
                {SAMPLE_CLASSES.map(cls => (
                  <option key={cls.id} value={cls.id}>
                    {cls.name}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => setIsClassFormOpen(true)}
                className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Nationality</label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.nationality}
              onChange={(e) => setFormData({...formData, nationality: e.target.value})}
            >
              <option value="Uganda">Uganda</option>
              {/* Add more nationality options */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Birth Certificate No.</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.birthCertNo}
              onChange={(e) => setFormData({...formData, birthCertNo: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Stream/Section</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <select
                className="flex-1 block w-full border border-gray-300 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.stream}
                onChange={(e) => setFormData({...formData, stream: e.target.value})}
                disabled={!formData.class}
              >
                <option value="">Select stream</option>
                {SAMPLE_STREAMS
                  .filter(stream => stream.classId === Number(formData.class))
                  .map(stream => (
                    <option key={stream.id} value={stream.id}>
                      Section {stream.name}
                    </option>
                  ))}
              </select>
              <button
                type="button"
                onClick={() => setIsStreamFormOpen(true)}
                disabled={!formData.class}
                className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm hover:bg-gray-100 disabled:opacity-50"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Student Password</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 pl-3 pr-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Religion</label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.religion}
              onChange={(e) => setFormData({...formData, religion: e.target.value})}
            >
              <option value="">Select religion</option>
              {/* Add religion options */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Roll No.</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.rollNo}
              onChange={(e) => setFormData({...formData, rollNo: e.target.value})}
            />
          </div>
        </div>
    <div className="col-span-3 grid grid-cols-3 gap-4">
      <div className="col-span-2 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Registration No.</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={formData.regNo}
            onChange={(e) => setFormData({...formData, regNo: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Admission Date</label>
          <input
            type="date"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={formData.admissionDate}
            onChange={(e) => setFormData({...formData, admissionDate: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            rows={2}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-start bg-gray-50 p-4 rounded-lg">
        <div className="text-center">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Student Profile Image</h3>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-2">
              {formData.profileImage ? (
                <img
                  src={URL.createObjectURL(formData.profileImage)}
                  alt="Profile preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg
                  className="h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M24 8c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8s8-3.59 8-8c0-4.42-3.58-8-8-8zm0 20c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <label
              htmlFor="profile-upload"
              className="px-3 py-1 text-xs bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 cursor-pointer"
            >
              Choose File
            </label>
            <input
              id="profile-upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <p className="mt-1 text-xs text-gray-500">Max 1MB</p>
          </div>
        </div>
      </div>
    </div>
      </form>

      <ParentForm
        isOpen={isParentFormOpen}
        onClose={() => setIsParentFormOpen(false)}
        onSave={handleParentSave}
      />

      <ClassForm
        isOpen={isClassFormOpen}
        onClose={() => setIsClassFormOpen(false)}
        onSave={handleClassSave}
      />

      <StreamForm
        isOpen={isStreamFormOpen}
        onClose={() => setIsStreamFormOpen(false)}
        onSave={handleStreamSave}
        classId={formData.class}
      />
    </div>
  );
} 