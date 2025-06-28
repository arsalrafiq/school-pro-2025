'use client';

import { 
  ShoppingCartIcon, 
  CurrencyDollarIcon, 
  ClipboardDocumentListIcon,
  CubeIcon 
} from '@heroicons/react/24/outline';

const stats = [
  { name: 'Total Students', value: '83', icon: ShoppingCartIcon },
  { name: 'Total Teachers', value: '13', icon: CurrencyDollarIcon },
  { name: 'Total Parents', value: '31', icon: ClipboardDocumentListIcon },
  { name: 'Total Classes', value: '13', icon: CubeIcon },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {stat.value}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 