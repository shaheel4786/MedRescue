import React from 'react';
import { AlertTriangle } from 'lucide-react';

const PanicButton = ({ onClick }) => {
  return (
    <div className="panic-btn-container slide-up">
      <button className="panic-btn" onClick={onClick}>
        <AlertTriangle size={48} color="white" />
        <span>SOS</span>
      </button>
      <div className="text-center mt-3 text-muted" style={{ fontSize: '14px', maxWidth: '250px' }}>
        Tap the SOS button to instantly request the nearest ambulance.
      </div>
    </div>
  );
};

export default PanicButton;
