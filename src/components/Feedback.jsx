import React, { useState } from 'react';

const Feedback = () => {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('feedback')) || []);

  const submitFeedback = (text) => {
    const newList = [...list, { text, date: new Date().toLocaleDateString() }];
    setList(newList);
    localStorage.setItem('feedback', JSON.stringify(newList));
  };

  return (
    <div className="feedback-view glass-card reveal">
      <h2>System <span>Logs & Feedback</span></h2>
      <input type="text" placeholder="Report a false alarm or bug..." onKeyDown={(e) => e.key === 'Enter' && submitFeedback(e.target.value)} />
      <div className="feedback-list">
        {list.map((item, index) => (
          <div key={index} className="log-entry">
            <span>{item.date}</span>: {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;