'use client';

import { useEffect } from 'react';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-full flex items-center justify-center py-12">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Something went wrong!</h2>
        <p className="mt-2 text-gray-600">An error occurred while loading the dashboard</p>
        <button
          onClick={reset}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 