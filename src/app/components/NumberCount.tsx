import React from "react";

const stats = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
        <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M12 3L2 8l10 5 10-5-10-5zm0 13v6m0-6l-8-4m8 4l8-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    ),
    value: 26,
    label: "Schools",
    desc: "Institutions using our platform",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
        <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m9-4a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    ),
    value: 52,
    label: "Students",
    desc: "Learning through our system",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
        <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-8 0v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    ),
    value: 6,
    label: "Parents",
    desc: "Engaged with their children’s education",
  },
];

export default function Number() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#2563eb] mb-4">Our Impact in Numbers</h2>
        <p className="text-center text-lg text-blue-900 mb-12">
          Trusted by educational institutions worldwide to streamline school management
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm border border-blue-100 p-8 flex flex-col items-center transition hover:shadow-lg"
            >
              {stat.icon}
              <div className="text-4xl font-bold text-[#2563eb] mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-blue-900 mb-1">{stat.label}</div>
              <div className="text-blue-700 text-sm text-center">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}