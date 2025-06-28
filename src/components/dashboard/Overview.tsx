'use client';

import { 
  UsersIcon, 
  BookOpenIcon, 
  UserGroupIcon, 
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const overviewStats = [
  {
    name: 'Total Students',
    value: '2,543',
    icon: UsersIcon,
    change: '+12%',
    changeType: 'increase'
  },
  {
    name: 'Total Classes',
    value: '48',
    icon: BookOpenIcon,
    change: '+4',
    changeType: 'increase'
  },
  {
    name: 'Total Teachers',
    value: '128',
    icon: UserGroupIcon,
    change: '+6',
    changeType: 'increase'
  },
  {
    name: 'Attendance Rate',
    value: '95.8%',
    icon: CalendarIcon,
    change: '+2.3%',
    changeType: 'increase'
  }
];

const quickActions = [
  {
    name: 'Mark Attendance',
    icon: ClockIcon,
    href: '/dashboard/attendance/mark'
  },
  {
    name: 'Grade Assignments',
    icon: CheckCircleIcon,
    href: '/dashboard/assignments/grade'
  }
];

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((stat) => (
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
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-4">
            {quickActions.map((action) => (
              <a
                key={action.name}
                href={action.href}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <action.icon className="h-6 w-6 text-gray-400" />
                <span className="ml-3 text-sm font-medium text-gray-900">
                  {action.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {[
              { text: 'New student enrollment completed', time: '2 hours ago' },
              { text: 'Monthly attendance report generated', time: '4 hours ago' },
              { text: 'New assignment posted in Class 10 Science', time: '6 hours ago' },
              { text: 'Parent-teacher meeting scheduled', time: '1 day ago' }
            ].map((activity, idx) => (
              <li key={idx} className="px-4 py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm text-gray-800">{activity.text}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 