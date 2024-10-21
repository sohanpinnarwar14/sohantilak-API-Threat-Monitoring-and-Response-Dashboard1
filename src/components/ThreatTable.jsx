import React from 'react';
import './ThreatTable.css';

const ThreatTable = () => {
  const threats = [
    { type: 'IP Access', timestamp: '2023-10-15 08:23:15', status: 'Blocked' },
    { type: 'Bot Access', timestamp: '2023-10-15 09:45:30', status: 'Detected' },
    { type: 'Malicious', timestamp: '2023-10-15 10:12:45', status: 'Investigating' },
  ];

  return (
    <div className="threat-table">
      <h2>Recent Threats</h2>
      <table>
        <thead>
          <tr>
            <th>Threat Type</th>
            <th>Timestamp</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {threats.map((threat, index) => (
            <tr key={index}>
              <td>{threat.type}</td>
              <td>{threat.timestamp}</td>
              <td>{threat.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ThreatTable;


