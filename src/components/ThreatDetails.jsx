import React from 'react';
import './ThreatDetails.css';

const ThreatDetails = () => {
  const threats = [
    { name: 'IP Access', count: 51, percentage: 13.5 },
    { name: 'Bot Access', count: 126, percentage: 33.3 },
    { name: 'Malicious', count: 69, percentage: 18.3 },
    { name: 'Threat Type', count: 132, percentage: 34.9 },
  ];

  return (
    <div className="threat-details">
      <h2>Total Threats</h2>
      <table>
        <thead>
          <tr>
            <th>Threat Type</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {threats.map((threat, index) => (
            <tr key={index}>
              <td>{threat.name}</td>
              <td>{threat.count}</td>
              <td>{threat.percentage.toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ThreatDetails;