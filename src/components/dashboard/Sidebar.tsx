'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  BanknotesIcon,
  TruckIcon,
  DocumentTextIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ChartPieIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';
import SidebarDropdown from './SidebarDropdown';
import ProfileDropdown from './ProfileDropdown';

const navigation = [
  {
    name: 'Dashboard',
    icon: HomeIcon,
    isDropdown: true,
    items: [
      { name: 'Main Dashboard', href: '/dashboard' },
      { name: 'Overview', href: '/dashboard/overview' },
      { name: 'Analytics', href: '/dashboard/analytics' },
      { name: 'Reports', href: '/dashboard/reports' }
    ]
  },
  {
    name: 'Student Management',
    icon: UserGroupIcon,
    isDropdown: true,
    items: [
      { name: 'Student Directory', href: '/dashboard/students/directory' },
      { name: 'Student List', href: '/dashboard/students' },
      { name: 'Add New Student', href: '/dashboard/students/new' },
      { name: 'Attendance', href: '/dashboard/students/attendance' },
      { name: 'Performance', href: '/dashboard/students/performance' }
    ]
  },
  {
    name: 'Academics',
    icon: AcademicCapIcon,
    isDropdown: true,
    items: [
      { name: 'Curriculum', href: '/dashboard/academics/curriculum' },
      { name: 'Timetable', href: '/dashboard/academics/timetable' },
      { name: 'Examinations', href: '/dashboard/academics/examinations' },
      { name: 'Assignments', href: '/dashboard/academics/assignments' },
      { name: 'Report Cards', href: '/dashboard/academics/report-cards' }
    ]
  },
  {
    name: 'Staff Management',
    icon: UserIcon,
    isDropdown: true,
    items: [
      { name: 'Staff Directory', href: '/dashboard/staff/directory' },
      { name: 'Attendance', href: '/dashboard/staff/attendance' },
      { name: 'Leave Management', href: '/dashboard/staff/leave' },
      { name: 'Performance', href: '/dashboard/staff/performance' }
    ]
  },
  {
    name: 'Communication',
    icon: ChatBubbleLeftRightIcon,
    isDropdown: true,
    items: [
      { name: 'Messages', href: '/dashboard/communication/messages' },
      { name: 'Announcements', href: '/dashboard/communication/announcements' },
      { name: 'Notice Board', href: '/dashboard/communication/notice-board' },
      { name: 'Emergency Alerts', href: '/dashboard/communication/emergency-alerts' }
    ]
  },
  {
    name: 'Finance',
    icon: BanknotesIcon,
    isDropdown: true,
    items: [
      { name: 'Fee Management', href: '/dashboard/finance/fees' },
      { name: 'Payments', href: '/dashboard/finance/payments' },
      { name: 'Scholarships', href: '/dashboard/finance/scholarships' },
      { name: 'Reports', href: '/dashboard/finance/reports' }
    ]
  },
  {
    name: 'Transport',
    icon: TruckIcon,
    isDropdown: true,
    items: [
      { name: 'Routes', href: '/dashboard/transport/routes' },
      { name: 'Tracking', href: '/dashboard/transport/tracking' },
      { name: 'Drivers', href: '/dashboard/transport/drivers' },
      { name: 'Maintenance', href: '/dashboard/transport/maintenance' }
    ]
  },
  {
    name: 'Resources',
    icon: DocumentTextIcon,
    isDropdown: true,
    items: [
      { name: 'Library', href: '/dashboard/resources/library' },
      { name: 'Inventory', href: '/dashboard/resources/inventory' },
      { name: 'Facilities', href: '/dashboard/resources/facilities' },
      { name: 'Assets', href: '/dashboard/resources/assets' }
    ]
  },
  {
    name: 'Reports & Analytics',
    icon: ChartBarIcon,
    isDropdown: true,
    items: [
      { name: 'Academic Reports', href: '/dashboard/reports/academic' },
      { name: 'Financial Reports', href: '/dashboard/reports/financial' },
      { name: 'Custom Reports', href: '/dashboard/reports/custom' }
    ]
  },
  {
    name: 'Settings',
    icon: Cog6ToothIcon,
    isDropdown: true,
    items: [
      { name: 'School Profile', href: '/dashboard/settings/profile' },
      { name: 'User Management', href: '/dashboard/settings/users' },
      { name: 'System Settings', href: '/dashboard/settings/system' },
      { name: 'Backup & Security', href: '/dashboard/settings/security' }
    ]
  },
  {
    name: 'Help & Support',
    icon: QuestionMarkCircleIcon,
    isDropdown: true,
    items: [
      { name: 'Help Center', href: '/help' },
      { name: 'FAQs', href: '/help#faqs' },
      { name: 'Contact Support', href: '/help#contact' }
    ]
  }
];

interface SidebarProps {
  isCollapsed: boolean;
  isMobile: boolean;
}

export default function Sidebar({ isCollapsed, isMobile }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={`${isMobile ? 'w-64' : isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 flex flex-col`}>
      <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto">
        <div className={`flex items-center flex-shrink-0 px-4 ${isCollapsed && !isMobile ? 'justify-center' : ''}`}>
          {!isCollapsed && (
            <Link href="/dashboard" className="flex items-center">
              <img src="/logo.png" alt="SchoolPro" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-gray-900">SchoolPro</span>
            </Link>
          )}
          {isCollapsed && !isMobile && (
            <Link href="/dashboard">
              <img src="/logo.png" alt="SchoolPro" className="h-8 w-8" />
            </Link>
          )}
        </div>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <SidebarDropdown
                key={item.name}
                name={item.name}
                icon={item.icon}
                items={item.items}
                isActive={pathname.startsWith(item.items[0]?.href?.split('/').slice(0, 3).join('/') || '')}
                isCollapsed={isCollapsed && !isMobile}
              />
            ))}
          </nav>
          {!isCollapsed && <ProfileDropdown />}
        </div>
      </div>
    </div>
  );
} 