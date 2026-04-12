import React, { useState } from 'react';
import { ChevronLeft, PhoneForwarded, MapPin, Phone, ShieldAlert } from 'lucide-react';

const Contact = () => {
  const [isCalling, setIsCalling] = useState(false);

  const commandCenters = [
    { name: "Central Command HQ", address: "123 Main Emergency Blvd, City Center", phone: "+1 (555) 123-4567", distance: "2.4 km" },
    { name: "North Zone Dispatch", address: "88 Northern Avenue, Uptown", phone: "+1 (555) 987-6543", distance: "5.1 km" },
    { name: "South Side Rescue", address: "400 Southern Parkway, Downtown", phone: "+1 (555) 456-7890", distance: "7.8 km" }
  ];

  const handleCallForwarding = () => {
    setIsCalling(true);
    // Simulate finding the fastest route / line
    setTimeout(() => {
      window.location.href = 'tel:911'; 
      setTimeout(() => setIsCalling(false), 2000);
    }, 1500);
  };

  return (
    <div className="page-container" style={{ maxWidth: '900px', paddingBottom: '90px' }}>
      <div className="glass-header d-flex align-center gap-2" style={{ padding: '16px', borderRadius: '16px', marginBottom: '24px' }}>
        <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex' }}>
          <ChevronLeft size={24} />
        </button>
        <h2 style={{ fontSize: '20px', margin: 0 }}>Command Centers</h2>
      </div>

      <div className="fast-booking-section slide-up" style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '16px', color: '#ff3b30' }}>Immediate Assistance</h3>
        <button 
          onClick={handleCallForwarding}
          className={`emergency-call-btn ${isCalling ? 'calling' : ''}`}
        >
          {isCalling ? (
            <div className="d-flex align-center justify-center gap-3" style={{ width: '100%' }}>
              <div 
                style={{ width: '24px', height: '24px', border: '3px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 1s linear infinite' }} 
              />
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Forwarding Emergency...</span>
            </div>
          ) : (
            <div className="d-flex align-center justify-center gap-3" style={{ width: '100%' }}>
              <PhoneForwarded size={32} />
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>One-Tap Emergency Booking</span>
            </div>
          )}
        </button>
        <p className="text-muted mt-3" style={{ fontSize: '14px', textAlign: 'center' }}>Call forwarded to the nearest active command center. No time wastage.</p>
      </div>

      <div className="command-centers-list slide-up" style={{ animationDelay: '0.1s' }}>
        <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldAlert size={20} color="#2b5bf4" />
          Nearby District Centers
        </h3>
        
        <div className="centers-grid">
          {commandCenters.map((center, index) => (
            <div key={index} className="center-card">
              <div className="center-header d-flex justify-between align-start">
                <h4 style={{ margin: 0, fontSize: '18px', color: '#fff' }}>{center.name}</h4>
                <div className="distance-badge">{center.distance}</div>
              </div>
              <div className="center-details" style={{ marginTop: '16px' }}>
                <div className="d-flex align-start gap-2" style={{ marginBottom: '12px', color: '#a0a5ab', fontSize: '14px' }}>
                  <MapPin size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{center.address}</span>
                </div>
                <div className="d-flex align-center justify-between mt-4 pb-1">
                  <div className="d-flex align-center gap-2" style={{ color: '#fff', fontWeight: '500', fontSize: '15px' }}>
                    <div style={{ background: 'rgba(52, 199, 89, 0.2)', padding: '6px', borderRadius: '50%', display: 'flex' }}>
                       <Phone size={14} color="#34c759" />
                    </div>
                    {center.phone}
                  </div>
                  <a href={`tel:${center.phone.replace(/[^0-9]/g, '')}`} className="btn-call-direct">
                    Call
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .emergency-call-btn {
          width: 100%;
          background: linear-gradient(135deg, #ff3b30 0%, #ff1a1a 100%);
          color: white;
          border: none;
          padding: 24px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          box-shadow: 0 12px 24px rgba(255,59,48,0.35);
          position: relative;
          overflow: hidden;
        }

        .emergency-call-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(255,59,48,0.45);
        }

        .emergency-call-btn:active {
          transform: translateY(2px);
        }

        .emergency-call-btn.calling {
          background: linear-gradient(135deg, #ff9500 0%, #ffcc00 100%);
          box-shadow: 0 12px 24px rgba(255,149,0,0.35);
          cursor: default;
        }

        .emergency-call-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }

        @keyframes spin { 
          100% { transform: rotate(360deg); } 
        }

        .centers-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        
        @media (min-width: 768px) {
          .centers-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .center-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 20px;
          backdrop-filter: blur(10px);
          transition: transform 0.2s, background 0.2s;
        }

        .center-card:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .distance-badge {
          background: rgba(43, 91, 244, 0.2);
          color: #2b5bf4;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        .btn-call-direct {
          background: #2b5bf4;
          color: white;
          text-decoration: none;
          padding: 8px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          transition: background 0.2s;
        }

        .btn-call-direct:hover {
          background: #1e45c4;
        }
      `}} />
    </div>
  );
};

export default Contact;
