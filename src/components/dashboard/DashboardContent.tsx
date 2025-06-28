'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with no SSR
const Overview = dynamic(() => import('./Overview'), { ssr: false });
const StatsCards = dynamic(() => import('./StatsCards'), { ssr: false });
const SalesChart = dynamic(() => import('./SalesChart'), { ssr: false });
const RevenueChart = dynamic(() => import('./RevenueChart'), { ssr: false });
const RecentOrders = dynamic(() => import('./RecentOrders'), { ssr: false });

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
    </div>
  );
}

export default function DashboardContent() {
  const pathname = usePathname();
  
  // Show Overview only when explicitly on the overview route
  if (pathname === '/dashboard/overview') {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Overview />
      </Suspense>
    );
  }

  // Show default dashboard content for the main dashboard route
  if (pathname === '/dashboard') {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
        <Suspense fallback={<LoadingSpinner />}>
          <StatsCards />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SalesChart />
            <RevenueChart />
          </div>
          <RecentOrders />
        </Suspense>
      </div>
    );
  }

  // Return null or a placeholder for other routes
  return null;
} 