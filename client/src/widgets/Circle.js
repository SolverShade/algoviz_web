import React from 'react';

function Circle() {
  return (
    <svg width="200" height="200">
      <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
      <circle cx="150" cy="150" r="40" stroke="black" strokeWidth="3" fill="blue" />
      <line x1="50" y1="50" x2="150" y2="150" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
    </svg>
  );
};

export default Circle;
