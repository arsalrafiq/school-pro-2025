export default function Features() {
  const features = [
    {
      title: "Student Information System",
      description: "Centralized student data management with digital enrollment, profile tracking, and academic records in one secure location."
    },
    {
      title: "Academic Excellence Suite",
      description: "Comprehensive tools for curriculum planning, examination management, and automated grading with detailed performance analytics."
    },
    {
      title: "Smart Communication Hub",
      description: "Multi-channel messaging platform connecting teachers, parents, and students with real-time notifications and updates."
    },
    {
      title: "Financial Management Center",
      description: "Streamlined fee collection, automated billing, and comprehensive financial reporting with secure payment processing."
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">✨ Features</h2>
          <p className="mt-4 text-xl text-gray-600">All-in-One School Management Platform</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 