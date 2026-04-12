import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapMockup from '../components/MapMockup';
import PanicButton from '../components/PanicButton';
import { Shield, Activity, Crosshair, PhoneCall } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [isBooking, setIsBooking] = useState(false);
  const [availableAmbulances, setAvailableAmbulances] = useState(0); // Default to 0 to show the new feature
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
        <div className="d-flex align-center gap-2">
          <div style={{
            position: 'relative',
            width: '36px', height: '36px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(252,65,54,0.2) 0%, rgba(252,65,54,0.05) 100%)',
            borderRadius: '10px',
            border: '1px solid rgba(252,65,54,0.3)',
            boxShadow: '0 0 15px rgba(252,65,54,0.2)'
          }}>
            <Shield size={22} color="#FC4136" style={{ position: 'absolute' }} />
            <Activity size={12} color="#ffffff" style={{ position: 'absolute', zIndex: 1, marginTop: '1px' }} />
          </div>
          <h2 style={{ fontSize: '22px', margin: 0, fontWeight: '700', letterSpacing: '0.5px', color: '#f8fafc' }}>
            Med<span style={{ color: '#FC4136' }}>Rescue</span>
          </h2>
        </div>
        <div 
          className={`badge ${availableAmbulances > 0 ? 'success' : 'warning'} d-flex align-center gap-1`} 
          onClick={() => setAvailableAmbulances(prev => prev === 0 ? 3 : 0)} 
          style={{ cursor: 'pointer', userSelect: 'none' }}
          title="Click to toggle ambulance availability for testing"
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: availableAmbulances > 0 ? '#34c759' : '#ffcc00' }}></span>
          {availableAmbulances > 0 ? 'Available' : 'Unavailable'}
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
        {availableAmbulances > 0 ? `Found ${availableAmbulances} ambulances near your location` : 'No ambulances available near your location'}
      </div>

      {!isBooking ? (
        availableAmbulances > 0 ? (
          <PanicButton onClick={handleSOS} />
        ) : (
          <div className="d-flex justify-center mt-4">
            <button 
              className="d-flex align-center justify-center gap-2 slide-up" 
              style={{ 
                width: '85%', padding: '18px', fontSize: '18px', 
                background: 'linear-gradient(135deg, var(--primary) 0%, #ff1a1a 100%)', 
                border: 'none', borderRadius: '18px', color: 'white', fontWeight: 'bold', 
                boxShadow: '0 8px 24px rgba(252,65,54,0.4)', cursor: 'pointer',
                animation: 'pulse-red 2s infinite'
              }}
              onClick={() => navigate('/contact')}
            >
              <PhoneCall size={24} />
              Contact Command Center
            </button>
          </div>
        )
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
