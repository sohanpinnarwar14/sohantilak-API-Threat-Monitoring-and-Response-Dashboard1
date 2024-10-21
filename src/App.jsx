import React from 'react';
import Dashboard from './components/Dashboard';
// import BackgroundAnimation from './components/BackgroundAnimation';
import './App.css';

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vh' }}>
      <Dashboard />
    </div>
  );
}

export default App;

