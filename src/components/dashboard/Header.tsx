'use client';

import { useState } from 'react';
import { FiSidebar } from "react-icons/fi";
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Avatar from './Avatar';
import Image from 'next/image';

interface HeaderProps {
  onMobileMenuClick: () => void;
  onDesktopSidebarToggle: () => void;
  isSidebarOpen: boolean;
}

export default function Header({ onMobileMenuClick, onDesktopSidebarToggle, isSidebarOpen }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button 
              type="button" 
              onClick={onMobileMenuClick}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open sidebar</span>
              <FiSidebar className="h-6 w-6" />
            </button>
            
            {/* Desktop toggle button */}
            <button
              type="button"
              onClick={onDesktopSidebarToggle}
              className="hidden md:block p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Toggle sidebar</span>
              <FiSidebar className="h-6 w-6" />
            </button>

            {/* Search bar */}
            <div className="ml-4 flex-1 flex items-center">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
              <BellIcon className="h-6 w-6" />
            </button>
            <div className="ml-3 relative">
              <div className="flex items-center">
                <Image
                  className="h-8 w-8 rounded-full"
                  src="/placeholder-avatar.jpg"
                  alt="User avatar"
                  width={32}
                  height={32}
                />
                <span className="ml-2 text-sm font-medium text-gray-700">
                  shadcnm@example.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 