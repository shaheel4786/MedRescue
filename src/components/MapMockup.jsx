import React from 'react';

const MapMockup = ({ children }) => {
  return (
    <div className="map-container fade-in">
      {/* Visual mockup of a map */}
      <div 
        style={{
          width: '100%', 
          height: '100%', 
          backgroundImage: 'radial-gradient(circle at center, #2a2b36 0%, #1c1d24 100%)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Map Grid Lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Simulated Ambulances */}
        <div style={{ position: 'absolute', top: '20%', left: '30%', animation: 'fadeIn 1s' }}>
          <div style={{ background: '#ff3b30', width: 12, height: 12, borderRadius: '50%', boxShadow: '0 0 10px #ff3b30' }}></div>
        </div>
        <div style={{ position: 'absolute', top: '70%', left: '70%', animation: 'fadeIn 1.5s' }}>
          <div style={{ background: '#ff3b30', width: 12, height: 12, borderRadius: '50%', boxShadow: '0 0 10px #ff3b30' }}></div>
        </div>
        <div style={{ position: 'absolute', top: '40%', left: '80%', animation: 'fadeIn 2s' }}>
          <div style={{ background: '#ff3b30', width: 12, height: 12, borderRadius: '50%', boxShadow: '0 0 10px #ff3b30' }}></div>
        </div>

        {/* User Location */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
          <div style={{ 
            background: '#34c759', 
            width: 16, height: 16, 
            borderRadius: '50%', 
            border: '3px solid #1c1d24',
            boxShadow: '0 0 15px #34c759' 
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 40, height: 40,
            borderRadius: '50%',
            background: 'rgba(52, 199, 89, 0.2)',
            animation: 'pulse-red 2s infinite',
            pointerEvents: 'none'
          }}></div>
        </div>

        {/* Optional overlay components (like ETA or driver info) */}
        {children}
      </div>
    </div>
  );
};

export default MapMockup;
