export default function TrustedBy() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
          Trusted by Leading Educational Institutions Worldwide
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {['School 1', 'Reform', 'Turple', 'Savvy', 'CalStatamic'].map((partner) => (
            <div key={partner} className="flex justify-center items-center">
              <span className="text-gray-400 text-xl font-semibold">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 