

// import React from 'react';
// import RequestChart from './RequestChart';
// import ThreatDetails from './ThreatDetails';
// import ThreatTable from './ThreatTable';
// import './Dashboard.css';

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h1>API Threat Monitoring and Response</h1>
//       <div className="dashboard-grid">
//         <div className="metric-card">
//           <h2 className="metric-title">Total Requests</h2>
//           <div className="metric">2024</div>
//         </div>
//         <div className="metric-card">
//           <h2 className="metric-title">Threat Detected</h2>
//           <div className="metric">332</div>
//           <div className="sub-metric">Total Threats Detected</div>
//         </div>
//         <div className="metric-card">
//           <h2 className="metric-title">Total Threats</h2>
//           <div className="metric">393</div>
//           <div className="sub-metric">Threat Detected</div>
//         </div>
//         <div className="metric-card">
//           <h2 className="metric-title">Threat Percentage</h2>
//           <div className="circular-progress">32%</div>
//         </div>
//         <RequestChart />
//         <ThreatDetails />
//         <ThreatTable />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React from 'react';
// import RequestChart from './RequestChart';
// import ThreatDetails from './ThreatDetails';
// import ThreatTable from './ThreatTable';
// import useCountUp from './useCountUp'; // Import the new hook
// import './Dashboard.css';

// const Dashboard = () => {
//   // Use the hook for each metric
//   const totalRequests = useCountUp(2024);
//   const threatDetected = useCountUp(332);
//   const totalThreats = useCountUp(393);
//   const threatPercentage = useCountUp(32);

//   return (
//     <div className="dashboard" id='sohan'>
//       <h1>API Threat Monitoring and Response</h1>
//       <div className="dashboard-grid">
//         <div className="metric-card">
//           <h2 className="metric-title">Total Requests</h2>
//           <div className="metric">{totalRequests}</div>
//         </div>
//         <div className="metric-card">
//           <h2 className="metric-title">Threat Detected</h2>
//           <div className="metric">{threatDetected}</div>
//           <div className="sub-metric">Total Threats Detected</div>
//         </div>
//         <div className="metric-card">
//           <h2 className="metric-title">Total Threats</h2>
//           <div className="metric">{totalThreats}</div>
//           <div className="sub-metric">Threat Detected</div>
//         </div>
//         <div className="metric-card">
//           <h2 className="metric-title">Threat Percentage</h2>
//           <div className="circular-progress"><span>{threatPercentage}%</span></div>
//         </div>
//         <RequestChart />
//         <ThreatDetails />
//         <ThreatTable />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React from 'react';
// import RequestChart from './RequestChart';
// import ThreatDetails from './ThreatDetails';
// import ThreatTable from './ThreatTable';
// import useCountUp from './useCountUp'; // Import the new hook
// import './Dashboard.css';

// const Dashboard = () => {
//   // Use the hook for each metric with a slower duration (e.g., 5000 ms)
//   const totalRequests = useCountUp(2024, 5000);  // Takes 5 seconds to count up
//   const threatDetected = useCountUp(332, 5000);  // Same 5 seconds duration
//   const totalThreats = useCountUp(393, 5000);    // Same 5 seconds duration
//   const threatPercentage = useCountUp(32, 5000); // Same 5 seconds duration

//   return (
//     <div className="dashboard" id='sohan'>
//       <h1>API Threat Monitoring and Response</h1>
//       <div className="dashboard-grid">
//         <div className="metric-card">
//           <h2 className="metric-title">Total Requests</h2>
//           <div className="metric">{totalRequests}</div>
//         </div>
//         <div className="metric-card">
//           <h2 className="metric-title">Threat Detected</h2>
//           <div className="metric">{threatDetected}</div>
//           <div className="sub-metric">Total Threats Detected</div>
//         </div>
//         <div className="metric-card">
//           <h2 className="metric-title">Total Threats</h2>
//           <div className="metric">{totalThreats}</div>
//           <div className="sub-metric">Threat Detected</div>
//         </div>
//         <div className="metric-card">
//           <h2 className="metric-title">Threat Percentage</h2>
//           <div className="circular-progress"><span>{threatPercentage}%</span></div>
//         </div>
//         <RequestChart />
//         <ThreatDetails />
//         <ThreatTable />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React from 'react';
// import RequestChart from './RequestChart';
// import ThreatDetails from './ThreatDetails';
// import ThreatTable from './ThreatTable';
// import useCountUp from './useCountUp';
// import AnimatedHeading from './AnimatedHeading';
// import './Dashboard.css';

// const Dashboard = () => {
//   const totalRequests = useCountUp(2024, 5000);
//   const threatDetected = useCountUp(332, 5000);
//   const totalThreats = useCountUp(393, 5000);
//   const threatPercentage = useCountUp(32, 5000);

//   return (
//     <div className="dashboard" id='sohan'>
//       <AnimatedHeading text="API Threat Monitoring and Response" />
//       <div className="dashboard-grid">
//         {/* ... rest of the component remains the same ... */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import RequestChart from './RequestChart';
import ThreatDetails from './ThreatDetails';
import ThreatTable from './ThreatTable';
import useCountUp from './useCountUp';
import './Dashboard.css';

const AnimatedHeading = ({ text }) => {
  return (
    <h1 className="animated-heading">
      {text.split('').map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {char}
        </span>
      ))}
    </h1>
  );
};

const Dashboard = () => {
  const totalRequests = useCountUp(2000, 5000);
  const threatDetected = useCountUp(332, 5000);
  const totalThreats = useCountUp(393, 5000);
  const threatPercentage = useCountUp(69, 5000);

  return (
    <div className="dashboard" id='sohan'>
      <AnimatedHeading text="API Threat Monitoring and Response" />
      <div className="dashboard-grid">
        <div className="metric-card">
          <h2 className="metric-title">Total Requests</h2>
          <div className="metric">{totalRequests}</div>
        </div>
        <div className="metric-card">
          <h2 className="metric-title">Threat Detected</h2>
          <div className="metric">{threatDetected}</div>
          <div className="sub-metric">Total Threats Detected</div>
        </div>
        <div className="metric-card">
          <h2 className="metric-title">Total Threats</h2>
          <div className="metric">{totalThreats}</div>
          <div className="sub-metric">Threat Detected</div>
        </div>
        <div className="metric-card">
          <h2 className="metric-title">Threat Percentage</h2>
          <div className="circular-progress"><span>{threatPercentage}%</span></div>
        </div>
        <RequestChart />
        <ThreatDetails />
        <ThreatTable />
      </div>
    </div>
  );
};

export default Dashboard;