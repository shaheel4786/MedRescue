import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapMockup from '../components/MapMockup';
import { Phone, MessageSquare, ShieldCheck, ChevronLeft, MapPin, Send } from 'lucide-react';

const Tracking = () => {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'driver', text: 'I am 5 minutes away. Please stay on the line or chat here if needed.', time: '10:02 AM' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    setMessages([...messages, { 
      id: Date.now(), 
      sender: 'user', 
      text: newMessage, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }]);
    setNewMessage('');
  };

  return (
    <div className="page-container" style={{ paddingBottom: '90px', position: 'relative' }}>
      <div className="glass-header d-flex align-center gap-2" style={{ padding: '16px', borderRadius: '16px', marginBottom: '16px' }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex' }}>
          <ChevronLeft size={24} />
        </button>
        <h2 style={{ fontSize: '18px', margin: 0 }}>Ambulance En Route</h2>
      </div>

      <MapMockup>
        <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', background: '#1c1d24', padding: '8px 16px', borderRadius: '20px', border: '1px solid #34c759', boxShadow: '0 4px 10px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 20 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#34c759', animation: 'pulse-red 2s infinite' }}></div>
          <span style={{ fontWeight: 600, fontSize: '14px', color: '#fff' }}>Arriving in 4 min</span>
        </div>
      </MapMockup>

      <div className="glass-panel slide-up mt-3" style={{ padding: '20px' }}>
        <div className="d-flex justify-between align-center mb-3">
          <div className="d-flex align-center gap-2">
            <div style={{ width: 50, height: 50, borderRadius: '50%', backgroundColor: '#2a2b36', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid var(--primary)' }}>
              <span style={{ fontSize: '20px' }}>👨‍⚕️</span>
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '16px' }}>Rajesh Kumar</h3>
              <p className="text-muted" style={{ margin: 0, fontSize: '14px' }}>GJ-01-AB-1234 • ALS Ambulance</p>
            </div>
          </div>
          <div className="badge success">
            Assigned
          </div>
        </div>

        <div className="d-flex gap-2">
          <button className="btn-secondary flex-1 w-100" onClick={() => window.location.href = 'tel:911'}>
            <Phone size={18} />
            Call
          </button>
          <button className="btn-primary flex-1 w-100" onClick={() => setShowChat(true)}>
            <MessageSquare size={18} />
            Chat
          </button>
        </div>
        <button className="btn-secondary w-100 mt-2" style={{ background: 'rgba(255, 59, 48, 0.1)', color: 'var(--primary)', border: '1px solid rgba(255, 59, 48, 0.3)' }} onClick={() => navigate('/pay')}>
          End & Pay
        </button>
      </div>

      <div className="glass-panel slide-up mt-3" style={{ padding: '20px' }}>
         <div className="d-flex justify-between align-center border-bottom pb-2">
           <h3 style={{ margin: 0, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
             <ShieldCheck size={18} color="#34c759" />
             Emergency Info Shared
           </h3>
         </div>
         <p className="text-muted mt-2" style={{ fontSize: '14px', lineHeight: '1.5' }}>
           Your medical history and real-time vital stats (if connected) are being shared with the driver and nearest hospital to ensure immediate care upon arrival.
         </p>
      </div>

      {/* Chat Bottom Sheet */}
      {showChat && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 2000,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'
        }} className="fade-in">
          <div className="slide-up" style={{
            background: 'var(--surface)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px',
            height: '70vh', display: 'flex', flexDirection: 'column'
          }}>
            <div className="d-flex justify-between align-center" style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ margin: 0, fontSize: '18px' }}>Chat with Rajesh</h3>
              <button onClick={() => setShowChat(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
            </div>
            
            <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {messages.map(msg => (
                <div key={msg.id} style={{ 
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%'
                }}>
                  <div style={{
                    background: msg.sender === 'user' ? 'var(--primary)' : 'var(--surface-light)',
                    padding: '12px 16px', borderRadius: '16px',
                    borderBottomRightRadius: msg.sender === 'user' ? 0 : '16px',
                    borderBottomLeftRadius: msg.sender === 'user' ? '16px' : 0,
                    fontSize: '14px', lineHeight: '1.4'
                  }}>
                    {msg.text}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                    {msg.time}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '12px' }}>
              <input 
                type="text" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                style={{
                  flex: 1, background: 'var(--surface-light)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '24px', padding: '12px 20px', color: '#fff', fontSize: '14px', outline: 'none'
                }}
              />
              <button type="submit" style={{
                background: 'var(--primary)', border: 'none', width: '44px', height: '44px',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', cursor: 'pointer'
              }}>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tracking;
