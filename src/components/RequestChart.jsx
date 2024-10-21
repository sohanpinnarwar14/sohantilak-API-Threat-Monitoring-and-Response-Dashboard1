import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './RequestChart.css';

const data = [
  { name: 'Jan', requests: 400 },
  { name: 'Feb', requests: 300 },
  { name: 'Mar', requests: 520 },
  { name: 'Apr', requests: 280 },
  { name: 'May', requests: 390 },
  { name: 'Jun', requests: 430 },
  { name: 'Jul', requests: 450 },
  { name: 'Aug', requests: 410 },
  { name: 'Sep', requests: 480 },
  { name: 'Oct', requests: 520 },
  { name: 'Nov', requests: 490 },
  { name: 'Dec', requests: 540 },
];

const RequestChart = () => {
  return (
    <div className="request-chart">
      <h2>Request Metrics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="name" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Line type="monotone" dataKey="requests" stroke="#3498db" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RequestChart;