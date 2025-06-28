'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const DashboardContent = dynamic(() => import('@/components/dashboard/DashboardContent'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
    </div>
  ),
});

export default function OverviewPage() {
  return (
    <div className="min-h-full">
      <Suspense fallback={null}>
        <DashboardContent />
      </Suspense>
    </div>
  );
} 