import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapMockup from '../components/MapMockup';
import PanicButton from '../components/PanicButton';
import { ShieldAlert, Crosshair } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [isBooking, setIsBooking] = useState(false);

  const handleSOS = () => {
    setIsBooking(true);
    // Simulate finding an ambulance and redirecting to tracking
    setTimeout(() => {
      navigate('/track');
    }, 2000);
  };

  return (
    <div className="page-container" style={{ paddingBottom: '90px' }}>
      <div className="glass-header d-flex justify-between align-center" style={{ padding: '16px', borderRadius: '16px', marginBottom: '24px' }}>
        <div className="d-flex align-center gap-1">
          <ShieldAlert color="#ff3b30" size={28} />
          <h2 style={{ fontSize: '20px', margin: 0 }}>MedRescue</h2>
        </div>
        <div className="badge success d-flex align-center gap-1">
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34c759' }}></span>
          Available
        </div>
      </div>

      <MapMockup>
        <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
          <button style={{ 
            background: '#1c1d24', border: '1px solid rgba(255,255,255,0.1)',
            padding: '10px', borderRadius: '50%', color: 'white', cursor: 'pointer'
          }}>
            <Crosshair size={20} />
          </button>
        </div>
      </MapMockup>

      <div className="mt-4 mb-2 text-center text-muted fade-in" style={{ fontSize: '14px' }}>
        Found 3 ambulances near your location
      </div>

      {!isBooking ? (
        <PanicButton onClick={handleSOS} />
      ) : (
        <div className="glass-panel w-100 p-4 slide-up" style={{ padding: '24px', textAlign: 'center', marginTop: '30px' }}>
          <h3 style={{ color: '#ff3b30', marginBottom: '12px' }}>Locating Nearest Ambulance...</h3>
          <p className="text-muted" style={{ fontSize: '14px', marginBottom: '20px' }}>
            Please stay calm. Do not close this app.
          </p>
          <div className="d-flex justify-center">
            <div style={{ width: '40px', height: '40px', border: '3px solid rgba(255, 59, 48, 0.3)', borderTopColor: '#ff3b30', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </div>
  );
};

export default Home;
