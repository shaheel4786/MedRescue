import React, { useState } from 'react';
import { User, Activity, AlertCircle, Phone, Share2, Shield, HeartPulse, Edit3 } from 'lucide-react';

const Profile = () => {
  const [autoShare, setAutoShare] = useState(true);

  return (
    <div className="page-container" style={{ paddingBottom: '100px' }}>
      <div className="glass-header d-flex align-center justify-between" style={{ padding: '20px', borderRadius: '20px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', margin: 0, background: 'linear-gradient(90deg, #fff, #a0a5ab)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Medical Profile</h2>
        <button style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', transition: 'background 0.2s' }}>
          <Edit3 size={20} />
        </button>
      </div>

      <div className="profile-hero slide-up">
        <div className="profile-avatar-container">
          <div className="profile-avatar">
            <User size={48} color="#fff" />
          </div>
          <div className="status-indicator"></div>
        </div>
        <h3 className="profile-name">Sarah Connor</h3>
        <p className="profile-id">ID: MED-8823G</p>
      </div>

      <div className="auto-share-card slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="d-flex align-center gap-3">
          <div className="icon-wrapper share-icon">
            <Share2 size={24} color="#fff" />
          </div>
          <div className="flex-1">
            <h4 style={{ margin: '0 0 4px', fontSize: '16px', color: '#fff' }}>Auto-Share Medical Info</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#a0a5ab', lineHeight: '1.4' }}>Instantly share critical details with the destination hospital during emergencies.</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" checked={autoShare} onChange={() => setAutoShare(!autoShare)} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <h4 className="section-title">Critical Medical Data</h4>
      
      <div className="medical-grid slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="medical-card blood-group">
          <div className="card-bg-icon"><Activity size={60} /></div>
          <div className="medical-icon"><Activity size={24} color="#ff3b30" /></div>
          <div className="medical-label">Blood Group</div>
          <div className="medical-value text-red">O+</div>
        </div>

        <div className="medical-card allergies">
          <div className="card-bg-icon"><AlertCircle size={60} /></div>
          <div className="medical-icon"><AlertCircle size={24} color="#ffcc00" /></div>
          <div className="medical-label">Allergies</div>
          <div className="medical-value text-yellow">Penicillin<br/><span style={{fontSize:'12px', fontWeight:'normal'}}>Peanuts</span></div>
        </div>
      </div>

      <div className="medical-card conditions slide-up" style={{ animationDelay: '0.3s', marginTop: '16px' }}>
        <div className="d-flex align-start gap-3">
          <div className="medical-icon"><HeartPulse size={24} color="#34c759" /></div>
          <div>
            <div className="medical-label" style={{ marginBottom: '8px' }}>Existing Conditions</div>
            <div className="tags-container">
              <span className="condition-tag">Asthma (Mild)</span>
              <span className="condition-tag">Hypertension</span>
            </div>
          </div>
        </div>
      </div>

      <h4 className="section-title" style={{ marginTop: '32px' }}>Emergency Contacts</h4>
      
      <div className="emergency-contact-card slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="d-flex justify-between align-center">
            <div className="contact-info">
              <h4 className="contact-name">John Connor</h4>
              <p className="contact-relation text-muted">Son • +1 555-0198</p>
            </div>
            <a href="tel:15550198" className="btn-call-circle">
              <Phone size={20} />
            </a>
        </div>
      </div>
      
      <div className="emergency-contact-card slide-up" style={{ animationDelay: '0.5s' }}>
        <div className="d-flex justify-between align-center">
            <div className="contact-info">
              <h4 className="contact-name">Martha Wayne</h4>
              <p className="contact-relation text-muted">Mother • +1 555-0205</p>
            </div>
            <a href="tel:15550205" className="btn-call-circle">
              <Phone size={20} />
            </a>
        </div>
      </div>

      <div className="secure-badge mt-4">
        <Shield size={16} color="#34c759" />
        <span>Your data is encrypted and securely stored.</span>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .profile-hero {
          text-align: center;
          padding: 24px 0 32px;
        }

        .profile-avatar-container {
          position: relative;
          width: 96px;
          height: 96px;
          margin: 0 auto 16px;
        }

        .profile-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #2b5bf4 0%, #a200ff 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          border: 4px solid #1c1d24;
          box-shadow: 0 10px 30px rgba(43, 91, 244, 0.4);
        }

        .status-indicator {
          position: absolute;
          bottom: 4px;
          right: 4px;
          width: 20px;
          height: 20px;
          background: #34c759;
          border: 3px solid #1c1d24;
          border-radius: 50%;
        }

        .profile-name {
          margin: 0 0 4px;
          font-size: 26px;
          font-weight: 700;
          color: #fff;
        }

        .profile-id {
          margin: 0;
          font-size: 14px;
          color: #a0a5ab;
          letter-spacing: 1px;
        }

        .auto-share-card {
          background: rgba(43, 91, 244, 0.15);
          border: 1px solid rgba(43, 91, 244, 0.3);
          border-radius: 20px;
          padding: 20px;
          margin-bottom: 32px;
          backdrop-filter: blur(10px);
        }

        .icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .share-icon {
          background: linear-gradient(135deg, #2b5bf4 0%, #1e45c4 100%);
          box-shadow: 0 6px 16px rgba(43, 91, 244, 0.3);
        }

        .section-title {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #a0a5ab;
          margin: 0 0 16px;
          font-weight: 600;
        }

        .medical-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .medical-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 24px 20px;
          overflow: hidden;
          transition: transform 0.2s;
        }

        .medical-card:hover {
          transform: translateY(-4px);
        }

        .card-bg-icon {
          position: absolute;
          right: -10px;
          bottom: -10px;
          opacity: 0.05;
          color: #fff;
        }

        .medical-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .blood-group .medical-icon { background: rgba(255, 59, 48, 0.15); }
        .allergies .medical-icon { background: rgba(255, 204, 0, 0.15); }
        .conditions .medical-icon { background: rgba(52, 199, 89, 0.15); margin-bottom: 0; }

        .medical-label {
          font-size: 13px;
          color: #a0a5ab;
          margin-bottom: 4px;
        }

        .medical-value {
          font-size: 24px;
          font-weight: 700;
        }

        .text-red { color: #ff3b30; }
        .text-yellow { color: #ffcc00; }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .condition-tag {
          background: rgba(255, 255, 255, 0.08);
          color: #e1e4e8;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .emergency-contact-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 16px 20px;
          margin-bottom: 12px;
          backdrop-filter: blur(10px);
        }

        .contact-name {
          margin: 0 0 4px;
          font-size: 17px;
          font-weight: 600;
          color: #fff;
        }

        .contact-relation {
          margin: 0;
          font-size: 14px;
        }

        .btn-call-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(52, 199, 89, 0.15);
          color: #34c759;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.2s;
        }

        .btn-call-circle:hover {
          background: #34c759;
          color: white;
          transform: scale(1.05);
        }

        .secure-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          background: rgba(52, 199, 89, 0.1);
          border-radius: 30px;
          font-size: 12px;
          color: #34c759;
          font-weight: 500;
        }

        /* Toggle Switch */
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 52px;
          height: 28px;
        }
        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(255,255,255,0.2);
          transition: .4s;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 22px;
          width: 22px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .4s;
        }
        input:checked + .slider {
          background-color: #2b5bf4;
        }
        input:checked + .slider:before {
          transform: translateX(24px);
        }
        .slider.round {
          border-radius: 34px;
        }
        .slider.round:before {
          border-radius: 50%;
        }
      `}} />
    </div>
  );
};

export default Profile;
