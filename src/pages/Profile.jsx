import React from 'react';
import { User, Activity, AlertCircle, Phone } from 'lucide-react';

const Profile = () => {
  return (
    <div className="page-container" style={{ paddingBottom: '90px' }}>
      <div className="glass-header d-flex align-center gap-2" style={{ padding: '16px', borderRadius: '16px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', margin: 0 }}>Medical Profile</h2>
      </div>

      <div className="glass-panel slide-up" style={{ padding: '24px', textAlign: 'center' }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: '#2a2b36', margin: '0 auto 16px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid var(--primary)' }}>
          <User size={40} color="var(--primary)" />
        </div>
        <h3 style={{ margin: '0 0 4px', fontSize: '22px' }}>Sarah Connor</h3>
        <p className="text-muted" style={{ margin: 0, fontSize: '14px' }}>sarah.connor@example.com • ID: MED-8823</p>
      </div>

      <h4 className="mt-4 mb-2 text-muted" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Critical Medical Info</h4>
      <div className="d-flex gap-2 mb-3">
        <div className="glass-panel flex-1" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'rgba(255, 59, 48, 0.1)', padding: '8px', borderRadius: '8px' }}>
            <Activity color="var(--primary)" size={24} />
          </div>
          <div>
            <div className="text-muted" style={{ fontSize: '12px' }}>Blood Group</div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>O+</div>
          </div>
        </div>
        <div className="glass-panel flex-1" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'rgba(255, 204, 0, 0.1)', padding: '8px', borderRadius: '8px' }}>
            <AlertCircle color="var(--warning)" size={24} />
          </div>
          <div>
            <div className="text-muted" style={{ fontSize: '12px' }}>Allergies</div>
            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Penicillin</div>
          </div>
        </div>
      </div>

      <h4 className="mt-4 mb-2 text-muted" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Emergency Contacts</h4>
      <div className="glass-panel slide-up mb-2" style={{ padding: '16px' }}>
        <div className="d-flex justify-between align-center">
           <div>
             <h4 style={{ margin: '0 0 4px', fontSize: '16px' }}>John Connor</h4>
             <p className="text-muted" style={{ margin: 0, fontSize: '13px' }}>Son • +1 555-0198</p>
           </div>
           <button style={{ background: 'var(--surface-light)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}>
             <Phone size={18} />
           </button>
        </div>
      </div>
      
      <div className="glass-panel slide-up mb-3" style={{ padding: '16px' }}>
        <div className="d-flex justify-between align-center">
           <div>
             <h4 style={{ margin: '0 0 4px', fontSize: '16px' }}>Martha Wayne</h4>
             <p className="text-muted" style={{ margin: 0, fontSize: '13px' }}>Mother • +1 555-0205</p>
           </div>
           <button style={{ background: 'var(--surface-light)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}>
             <Phone size={18} />
           </button>
        </div>
      </div>

      <div className="mt-4 text-center">
         <p className="text-muted" style={{ fontSize: '12px' }}>This information helps doctors and ambulance staff provide quick treatment.</p>
      </div>
    </div>
  );
}

export default Profile;
