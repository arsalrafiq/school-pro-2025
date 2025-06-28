'use client';

import { useState } from 'react';
import { XMarkIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface ParentFormData {
  title: string;
  firstName: string;
  lastName: string;
  relationship: string;
  nationalId: string;
  gender: string;
  dateOfBirth: string;
  phone: string;
  nationality: string;
  email: string;
  whatsapp: string;
  preferredContact: string;
  occupation: string;
  address: string;
  password: string;
  profileImage: File | null;
}

interface ParentFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (parentData: ParentFormData) => void;
}

export default function ParentForm({ isOpen, onClose, onSave }: ParentFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<ParentFormData>({
    title: '',
    firstName: '',
    lastName: '',
    relationship: '',
    nationalId: '',
    gender: '',
    dateOfBirth: '',
    phone: '',
    nationality: 'Uganda',
    email: '',
    whatsapp: '',
    preferredContact: '',
    occupation: '',
    address: '',
    password: '',
    profileImage: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 1024 * 1024) { // 1MB limit
      setFormData(prev => ({ ...prev, profileImage: file }));
    } else {
      alert('Please select an image under 1MB');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="bg-white px-4 pt-4 pb-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <button onClick={onClose} className="mr-2">
                  <XMarkIcon className="h-5 w-5 text-gray-500" />
                </button>
                <h3 className="text-base font-medium">Create Parent</h3>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={onClose}
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  Close
                </button>
                <button
                  type="submit"
                  form="parent-form"
                  className="px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700"
                >
                  Save Parent
                </button>
              </div>
            </div>

            <form id="parent-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 gap-x-4 gap-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Title</label>
                  <select
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                  >
                    <option value="">Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Relationship</label>
                  <select
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.relationship}
                    onChange={(e) => setFormData({...formData, relationship: e.target.value})}
                  >
                    <option value="">Father</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Guardian">Guardian</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">National ID/Passport</label>
                  <input
                    type="text"
                    placeholder="National ID/Passport"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.nationalId}
                    onChange={(e) => setFormData({...formData, nationalId: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Gender</label>
                  <select
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Nationality</label>
                  <select
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.nationality}
                    onChange={(e) => setFormData({...formData, nationality: e.target.value})}
                  >
                    <option value="Uganda">Uganda</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">WhatsApp No.</label>
                  <input
                    type="tel"
                    placeholder="WhatsApp No."
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 mt-3">
                <div className="col-span-2 space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Select Preferred Contact Method</label>
                    <select
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      value={formData.preferredContact}
                      onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                    >
                      <option value="">Preferred Contact Method</option>
                      <option value="Phone">Phone</option>
                      <option value="Email">Email</option>
                      <option value="WhatsApp">WhatsApp</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">Occupation</label>
                    <input
                      type="text"
                      placeholder="Occupation"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      value={formData.occupation}
                      onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">Address</label>
                    <textarea
                      placeholder="Address"
                      rows={2}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">Parent Portal Password</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Parent Portal Password"
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-1.5 pl-3 pr-10 text-xs focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 px-2 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="h-4 w-4 text-gray-400" />
                        ) : (
                          <EyeIcon className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pl-4">
                  <div className="text-center">
                    <h3 className="text-xs font-medium text-gray-900 mb-2">Parent Profile Image</h3>
                    <div className="flex flex-col items-center">
                      <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden mb-2 border-2 border-gray-200">
                        {formData.profileImage ? (
                          <img
                            src={URL.createObjectURL(formData.profileImage)}
                            alt="Profile preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#98E9AB] flex items-center justify-center">
                            <svg
                              className="h-16 w-16 text-white"
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
                          </div>
                        )}
                      </div>
                      <label
                        htmlFor="parent-profile-upload"
                        className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-md hover:bg-indigo-700 cursor-pointer"
                      >
                        Choose File
                      </label>
                      <input
                        id="parent-profile-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                      <p className="mt-1 text-[10px] text-gray-500">Image (1MB)</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 