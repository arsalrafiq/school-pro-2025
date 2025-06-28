'use client';
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    schoolName: '',
    country: '',
    website: '',
    students: '',
    role: '',
    media: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <header className="text-center mb-8">
        <img src="/logo.png" alt="School Pro Logo" className="mx-auto mb-4" />
        <h1 className="text-3xl font-bold">Get Your School Management System</h1>
        <p className="text-gray-600 mt-2">
          Ready to transform your school's digital infrastructure? Fill out the form below and we'll help you get started with a customized solution tailored to your institution's needs.
        </p>
      </header>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-center mb-4">
          Tell us about your institution and requirements
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Your Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (e.g. 0762068160)"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            value={formData.schoolName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Country</option>
            <option value="Pakistan">Pakistan</option>
            {/* Add more countries as needed */}
          </select>
          <input
            type="url"
            name="website"
            placeholder="School Website/Social Media Page (e.g. LinkedIn)"
            value={formData.website}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="students"
            placeholder="Number of Students"
            value={formData.students}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Role</option>
            <option value="School Administrator">School Administrator</option>
            {/* Add more roles as needed */}
          </select>
          <select
            name="media"
            value={formData.media}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Which Media did hear about Us</option>
            {/* Add media options as needed */}
          </select>
          <textarea
            name="description"
            placeholder="Please share with us the key pain points you want to solve"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-around mt-8">
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <h3 className="font-semibold">Speak to someone in sales</h3>
          <p>To create a more value-added solution, it is essential to an analysis of the possibilities of improvement.</p>
          <button className="mt-2 p-2 bg-green-500 text-white rounded">Book Appointment</button>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg text-center">
          <h3 className="font-semibold">Contact to our team</h3>
          <p>To create a more value-added solution, it is essential to an analysis of the possibilities of improvement.</p>
          <button className="mt-2 p-2 bg-yellow-500 text-white rounded">Send a Mail</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


// 'use client'

// import { FormEvent } from 'react'

// export default function Demo() {
//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     // Add your form submission logic here
//     console.log('Form submitted')
//   }

//   return (
//     <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8">Book a Demo</h1>
//         <div className="bg-white shadow rounded-lg p-6">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="school" className="block text-sm font-medium text-gray-700">
//                 School Name
//               </label>
//               <input
//                 type="text"
//                 name="school"
//                 id="school"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 placeholder="Tell us about your school and requirements..."
//               />
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Schedule Demo
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// } 