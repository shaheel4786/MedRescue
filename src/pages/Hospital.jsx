import React, { useState } from 'react';
import { Building2, Navigation, CheckCircle2 } from 'lucide-react';

const Hospital = () => {
  const [notified, setNotified] = useState({});

  const hospitals = [
    { id: 1, name: 'City Central Hospital', distance: '1.2 km', time: '5 mins', rating: 'Emergency Level 1' },
    { id: 2, name: 'St. Mary\'s Medical Center', distance: '3.5 km', time: '12 mins', rating: 'Trauma Center' },
    { id: 3, name: 'Sunrise General', distance: '4.8 km', time: '15 mins', rating: 'General Care' }
  ];

  const handleNotify = (id) => {
    setNotified(prev => ({ ...prev, [id]: true }));
    // In a real app, this would trigger an API call to the hospital system
  };

  return (
    <div className="page-container" style={{ paddingBottom: '90px' }}>
      <div className="glass-header" style={{ padding: '16px', borderRadius: '16px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', margin: 0 }}>Nearby Hospitals</h2>
        <p className="text-muted mt-1" style={{ fontSize: '14px', margin: 0 }}>Select a facility to alert them of incoming patient</p>
      </div>

      <div className="d-flex flex-column gap-3">
        {hospitals.map((hospital, index) => (
          <div key={hospital.id} className="glass-panel slide-up" style={{ padding: '20px', animationDelay: `${index * 0.1}s` }}>
            <div className="d-flex gap-3">
              <div style={{ width: 60, height: 60, borderRadius: '12px', backgroundColor: '#2a2b36', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Building2 size={30} color={notified[hospital.id] ? "var(--success)" : "var(--primary)"} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 6px', fontSize: '18px' }}>{hospital.name}</h3>
                <div className="d-flex align-center gap-2 mb-1">
                  <div className="badge" style={{ background: 'rgba(255,255,255,0.1)' }}>{hospital.rating}</div>
                </div>
                <div className="d-flex align-center gap-1 text-muted" style={{ fontSize: '13px' }}>
                  <Navigation size={14} />
                  {hospital.distance} • ~{hospital.time}
                </div>
              </div>
            </div>

            <div className="mt-3">
              {notified[hospital.id] ? (
                <div className="btn-secondary w-100" style={{ background: 'rgba(52, 199, 89, 0.1)', color: 'var(--success)', border: '1px solid rgba(52, 199, 89, 0.3)' }}>
                  <CheckCircle2 size={18} />
                  Hospital Notified
                </div>
              ) : (
                <button className="btn-primary w-100" onClick={() => handleNotify(hospital.id)} style={{ padding: '12px' }}>
                  Alert & Send Patient Details
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hospital;
