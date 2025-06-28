'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronUpIcon,
  RocketLaunchIcon,
  UserCircleIcon,
  CreditCardIcon,
  BellIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import Avatar from './Avatar';

const profileMenu = [
  { name: 'Upgrade to Pro', href: '/pricing', icon: RocketLaunchIcon },
  { name: 'Account', href: '/dashboard/account', icon: UserCircleIcon },
  { name: 'Billing', href: '/dashboard/billing', icon: CreditCardIcon },
  { name: 'Notifications', href: '/dashboard/notifications', icon: BellIcon },
  { name: 'Logout', href: '/logout', icon: ArrowRightOnRectangleIcon },
];

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-200 p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full group"
      >
        <Avatar size={24} className="rounded-full" />
        <div className="ml-1 flex-1">
          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
            shadcnm@example.com
          </p>
        </div>
        {/* <ChevronUpIcon
          className={`ml-2 h-4 w-4 transform transition-transform duration-200 text-gray-500 ${
            isOpen ? 'rotate-0' : 'rotate-180'
          }`}
        /> */}
          <ChevronUpIcon
          className={`ml-2 h-4 w-4 transform transition-transform duration-200 text-gray-500${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="mt-3 space-y-1">
          {profileMenu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 