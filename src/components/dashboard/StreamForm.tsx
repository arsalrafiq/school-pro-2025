'use client';

import { useState } from 'react';
import { XMarkIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

interface StreamFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (streamData: any) => void;
  classId?: string;
}

export default function StreamForm({ isOpen, onClose, onSave, classId }: StreamFormProps) {
  const [streams, setStreams] = useState([
    { id: 1, name: 'A', students: 40, classTeacher: 'Ms. Sarah' },
    { id: 2, name: 'B', students: 38, classTeacher: 'Mr. John' },
    { id: 3, name: 'C', students: 42, classTeacher: 'Ms. Emily' }
  ]);

  const [newStreamName, setNewStreamName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddStream = () => {
    if (newStreamName.trim()) {
      const newStream = {
        id: streams.length + 1,
        name: newStreamName,
        students: 0,
        classTeacher: ''
      };
      setStreams([...streams, newStream]);
      setNewStreamName('');
    }
  };

  const handleDeleteStream = (id: number) => {
    setStreams(streams.filter(s => s.id !== id));
  };

  if (!isOpen) return null;

  const filteredStreams = streams.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <button onClick={onClose} className="mr-2">
                  <XMarkIcon className="h-6 w-6 text-gray-500" />
                </button>
                <h3 className="text-lg font-medium">Streams/Sections</h3>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={onClose}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Search and Add Stream */}
            <div className="mb-4 flex gap-4">
              <input
                type="text"
                placeholder="Search streams..."
                className="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="New stream name (A, B, C...)"
                  className="border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={newStreamName}
                  onChange={(e) => setNewStreamName(e.target.value)}
                />
                <button
                  onClick={handleAddStream}
                  className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700"
                >
                  Add Stream
                </button>
              </div>
            </div>

            {/* Streams List */}
            <div className="mt-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stream Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Students
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Class Teacher
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredStreams.map((stream) => (
                      <tr key={stream.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Section {stream.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {stream.students} students
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {stream.classTeacher}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            onClick={() => onSave(stream)}
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                          >
                            Select
                          </button>
                          <button 
                            className="text-gray-600 hover:text-gray-900 mr-3"
                          >
                            <PencilIcon className="h-5 w-5" />
                          </button>
                          <button 
                            onClick={() => handleDeleteStream(stream.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 