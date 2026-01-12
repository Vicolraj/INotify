import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [status, setStatus] = useState("Scanning...");
  
  useEffect(() => {
    const events = ["Optimizing LoRa Nodes...", "Sentinel AI Online", "Police Gateway: Active"];
    let i = 0;
    const interval = setInterval(() => {
      setStatus(events[i % events.length]);
      i++;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dash-layout">
      <div className="glass-card sidebar">
        <div className="user-profile">
          <div className="avatar">JD</div>
          <p>Chief Admin</p>
        </div>
        <nav>
          <button className="active">Live Monitor</button>
          <button onClick={() => window.location.href='/feedback'}>Feedback</button>
        </nav>
      </div>

      <main className="feed-grid">
        <div className="glass-card main-cam reveal">
          <div className="live-status"><span className="red-dot"></span> {status}</div>
          <img src="https://via.placeholder.com/800x400/000/f00?text=SENTINEL+AI+ACTIVE+FEED" alt="AI Feed" />
        </div>
        
        <div className="glass-card stats reveal">
          <h4>Node Coverage</h4>
          <div className="progress-bar"><div className="fill" style={{width: '85%'}}></div></div>
          <p>85% of Village Sector A covered</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;