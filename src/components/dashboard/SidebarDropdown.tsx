'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface SubMenuItem {
  name: string;
  href: string;
}

interface SidebarDropdownProps {
  name: string;
  icon: React.ElementType;
  items: SubMenuItem[];
  isActive?: boolean;
  isCollapsed?: boolean;
}

export default function SidebarDropdown({ 
  name, 
  icon: Icon, 
  items, 
  isActive,
  isCollapsed 
}: SidebarDropdownProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(isActive);

  useEffect(() => {
    if (!isCollapsed) {
      const shouldBeOpen = items.some(item => pathname.startsWith(item.href)) || isActive;
      setIsOpen(shouldBeOpen);
    }
  }, [pathname, items, isActive, isCollapsed]);

  if (isCollapsed) {
    return (
      <div className="relative group">
        <button
          className={`w-full flex justify-center p-2 text-sm font-medium rounded-md ${
            isActive
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <Icon className="h-6 w-6" />
        </button>
        {/* Tooltip/Popup menu on hover */}
        <div className="hidden group-hover:block absolute left-full top-0 ml-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 text-sm ${
                  pathname === item.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
          isActive
            ? 'bg-gray-100 text-gray-900'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`}
      >
        <Icon className="mr-3 h-6 w-6" />
        <span className="flex-1 text-left">{name}</span>
        <ChevronDownIcon
          className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pl-11 pr-2 space-y-1">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                pathname === item.href
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 