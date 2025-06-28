'use client';

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Monthly_fee: 4000 },
  { name: 'Feb', Monthly_fee: 3000 },
  { name: 'Mar', Monthly_fee: 2000 },
  { name: 'Apr', Monthly_fee: 2780 },
  { name: 'May', Monthly_fee: 1890 },
  { name: 'Jun', Monthly_fee: 2390 },
];

export default function SalesChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Fee Overview</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Monthly_fee" stroke="#4F46E5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 