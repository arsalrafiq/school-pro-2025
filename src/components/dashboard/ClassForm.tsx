'use client';

import { useState } from 'react';
import { XMarkIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

interface ClassFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (classData: any) => void;
}

export default function ClassForm({ isOpen, onClose, onSave }: ClassFormProps) {
  const [classes, setClasses] = useState([
    { id: 1, name: 'Class 5', sections: 3, students: 120 },
    { id: 2, name: 'Class 6', sections: 2, students: 80 },
    { id: 3, name: 'Class 7', sections: 4, students: 160 },
    { id: 4, name: 'Class 8', sections: 3, students: 115 },
    { id: 5, name: 'Class 9', sections: 2, students: 75 }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [newClassName, setNewClassName] = useState('');

  const handleAddClass = () => {
    if (newClassName.trim()) {
      const newClass = {
        id: classes.length + 1,
        name: newClassName,
        sections: 0,
        students: 0
      };
      setClasses([...classes, newClass]);
      setNewClassName('');
    }
  };

  const handleDeleteClass = (id: number) => {
    setClasses(classes.filter(c => c.id !== id));
  };

  if (!isOpen) return null;

  const filteredClasses = classes.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
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
                <h3 className="text-lg font-medium">Classes</h3>
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

            {/* Search and Add Class */}
            <div className="mb-4 flex gap-4">
              <input
                type="text"
                placeholder="Search classes..."
                className="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="New class name"
                  className="border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                />
                <button
                  onClick={handleAddClass}
                  className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700"
                >
                  Add Class
                </button>
              </div>
            </div>

            {/* Classes List */}
            <div className="mt-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Class Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sections
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Students
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredClasses.map((classItem) => (
                      <tr key={classItem.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {classItem.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {classItem.sections} sections
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {classItem.students} students
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            onClick={() => onSave(classItem)}
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
                            onClick={() => handleDeleteClass(classItem.id)}
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