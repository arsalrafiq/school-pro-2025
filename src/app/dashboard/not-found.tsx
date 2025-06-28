export default function DashboardNotFound() {
  return (
    <div className="min-h-full flex items-center justify-center py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <p className="text-xl text-gray-600 mt-4">Dashboard page not found</p>
        <a 
          href="/dashboard"
          className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Back to Dashboard
        </a>
      </div>
    </div>
  );
} 