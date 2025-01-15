import React from 'react';
import WhatsNew from './WhatsNew';

const GetStarted = ({ onNavigate }) => {
  return (
    <div>
      <h2>Get Started</h2>
      <p>Welcome to the Get Started section.</p>
      <WhatsNew onNavigate={onNavigate} />
    </div>
  );
};

export default GetStarted;
