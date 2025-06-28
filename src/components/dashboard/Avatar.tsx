'use client';

import Image from 'next/image';

interface AvatarProps {
  size?: number;
  className?: string;
}

export default function Avatar({ size = 32, className = '' }: AvatarProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <div className="rounded-full bg-gray-200 flex items-center justify-center w-full h-full">
        <svg
          className="h-3/4 w-3/4 text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
    </div>
  );
} 