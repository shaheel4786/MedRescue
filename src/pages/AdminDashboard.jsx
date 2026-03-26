import React, { useState } from 'react';
import { BarChart, Activity, Ambulance, Users, Phone, LayoutDashboard, Clock, CheckCircle, AlertTriangle, ChevronRight, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const mockAmbulances = [
    { id: 'AMB-01', type: 'ALS', driver: 'Rajesh Kumar', status: 'En Route', location: 'Downtown', etd: '4 mins' },
    { id: 'AMB-02', type: 'BLS', driver: 'Amit Singh', status: 'Available', location: 'Station A', etd: '-' },
    { id: 'AMB-03', type: 'ALS', driver: 'Priya Sharma', status: 'Busy', location: 'City Hospital', etd: 'Arrived' },
    { id: 'AMB-04', type: 'BLS', driver: 'John Doe', status: 'Offline', location: 'Maintenance', etd: '-' },
  ];

  const mockDrivers = [
    { id: 'DRV-101', name: 'Rajesh Kumar', phone: '+91 9876543210', ambulance: 'AMB-01', status: 'On Shift (Active)', rating: '4.9' },
    { id: 'DRV-102', name: 'Amit Singh', phone: '+91 9876543211', ambulance: 'AMB-02', status: 'On Shift (Available)', rating: '4.7' },
    { id: 'DRV-103', name: 'Priya Sharma', phone: '+91 9876543212', ambulance: 'AMB-03', status: 'On Shift (Active)', rating: '5.0' },
    { id: 'DRV-104', name: 'John Doe', phone: '+91 9876543213', ambulance: 'AMB-04', status: 'Off Shift', rating: '4.5' },
  ];

  const mockRequests = [
    { id: 'REQ-991', patient: 'Sarah Connor', type: 'Heart Attack', location: '42 Elm St', time: '10:45 AM', assigned: 'AMB-01', status: 'In Progress' },
    { id: 'REQ-990', patient: 'Max Rockatansky', type: 'Accident', location: 'Highway 9', time: '10:30 AM', assigned: 'AMB-03', status: 'Arrived' },
    { id: 'REQ-989', patient: 'Ellen Ripley', type: 'Asthma Attack', location: 'Nostromo Apts', time: '09:15 AM', assigned: 'AMB-02', status: 'Completed' },
    { id: 'REQ-988', patient: 'Tony Stark', type: 'Chest Pain', location: 'Stark Tower', time: '08:00 AM', assigned: 'AMB-01', status: 'Completed' },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="fade-in">
            <h2 className="mb-3" style={{ fontSize: '24px' }}>Dashboard Overview</h2>
             
            {/* Stat Cards */}
            <div className="admin-grid mb-4">
               <div className="admin-card glass-panel" style={{ borderLeft: '4px solid var(--primary)' }}>
                 <div className="text-muted mb-1 d-flex justify-between align-center">
                   Total Requests (Today) <Activity size={18} color="var(--primary)" />
                 </div>
                 <div style={{ fontSize: '32px', fontWeight: 'bold' }}>142</div>
                 <div style={{ fontSize: '13px', color: 'var(--success)', marginTop: '8px' }}>↑ 12% from yesterday</div>
               </div>
               <div className="admin-card glass-panel" style={{ borderLeft: '4px solid #2b5bf4' }}>
                 <div className="text-muted mb-1 d-flex justify-between align-center">
                   Active Ambulances <Ambulance size={18} color="#2b5bf4" />
                 </div>
                 <div style={{ fontSize: '32px', fontWeight: 'bold' }}>24</div>
                 <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px' }}>Out of 30 total fleet</div>
               </div>
               <div className="admin-card glass-panel" style={{ borderLeft: '4px solid var(--warning)' }}>
                 <div className="text-muted mb-1 d-flex justify-between align-center">
                   Avg. Response Time <Clock size={18} color="var(--warning)" />
                 </div>
                 <div style={{ fontSize: '32px', fontWeight: 'bold' }}>4.2 <span style={{fontSize:'16px'}}>min</span></div>
                 <div style={{ fontSize: '13px', color: 'var(--success)', marginTop: '8px' }}>↓ 0.5 min from last week</div>
               </div>
            </div>

            {/* Analytics Chart Mockup */}
            <div className="admin-card glass-panel mb-4">
              <h3 className="mb-3 d-flex align-center gap-2"><BarChart size={20} /> Emergency Calls Trend (Last 7 Days)</h3>
              <div style={{ height: '250px', display: 'flex', alignItems: 'flex-end', gap: '10px', paddingTop: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                {[60, 80, 50, 90, 110, 85, 142].map((val, idx) => (
                  <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div className="chart-bar" style={{ 
                      width: '60%', 
                      height: `${(val/150)*100}%`, 
                      background: idx === 6 ? 'var(--primary)' : 'rgba(255, 59, 48, 0.4)',
                      borderRadius: '4px 4px 0 0',
                      transition: 'height 1s ease-out'
                    }}></div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][idx]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'ambulances':
        return (
          <div className="fade-in">
            <div className="d-flex justify-between align-center mb-3">
              <h2 style={{ fontSize: '24px' }}>Fleet Management</h2>
              <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>+ Add Ambulance</button>
            </div>
            <div className="admin-card glass-panel" style={{ overflowX: 'auto' }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Assigned Driver</th>
                    <th>Current Location</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockAmbulances.map(amb => (
                    <tr key={amb.id}>
                      <td style={{ fontWeight: 'bold' }}>{amb.id}</td>
                      <td><div className="badge" style={{ background: amb.type === 'ALS' ? '#2b5bf444' : '#fff2', color: amb.type === 'ALS' ? '#8baaff' : '#fff' }}>{amb.type}</div></td>
                      <td>{amb.driver}</td>
                      <td>{amb.location}</td>
                      <td>
                        <span className={`status-dot ${amb.status === 'Available' ? 'status-green' : amb.status === 'En Route' ? 'status-red' : amb.status === 'Busy' ? 'status-yellow' : 'status-gray'}`}></span>
                        {amb.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'drivers':
        return (
          <div className="fade-in">
            <div className="d-flex justify-between align-center mb-3">
              <h2 style={{ fontSize: '24px' }}>Drivers Directory</h2>
              <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>+ Add Driver</button>
            </div>
            <div className="admin-card glass-panel" style={{ overflowX: 'auto' }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Driver Name</th>
                    <th>Phone</th>
                    <th>Assigned Vehicle</th>
                    <th>Rating</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockDrivers.map(drv => (
                    <tr key={drv.id}>
                      <td style={{ fontWeight: 'bold' }}>{drv.name}</td>
                      <td>{drv.phone}</td>
                      <td>{drv.ambulance}</td>
                      <td>⭐ {drv.rating}</td>
                      <td>
                        <span className={`status-dot ${drv.status.includes('Available') ? 'status-green' : drv.status.includes('Active') ? 'status-blue' : 'status-gray'}`}></span>
                        {drv.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'requests':
        return (
          <div className="fade-in">
             <div className="d-flex justify-between align-center mb-3">
              <h2 style={{ fontSize: '24px' }}>Live Emergency Requests</h2>
              <div className="badge success d-flex align-center gap-1" style={{ fontSize: '14px', padding: '6px 12px' }}>
                <Activity size={14} /> Auto-Dispatch Active
              </div>
            </div>
            <div className="admin-card glass-panel" style={{ overflowX: 'auto' }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Request ID</th>
                    <th>Patient</th>
                    <th>Emergency Type</th>
                    <th>Time</th>
                    <th>Assigned To</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockRequests.map(req => (
                    <tr key={req.id}>
                      <td style={{ fontWeight: 'bold' }}>{req.id}</td>
                      <td>{req.patient}</td>
                      <td><span style={{ color: req.type.includes('Heart') || req.type.includes('Accident') ? 'var(--primary)' : 'inherit' }}>{req.type}</span></td>
                      <td>{req.time}</td>
                      <td>{req.assigned}</td>
                      <td>
                        <div className={`badge ${req.status === 'Completed' ? 'success' : req.status === 'In Progress' ? 'warning' : ''}`} style={{ background: req.status==='Completed' ? 'rgba(52,199,89,0.2)' : 'rgba(255,204,0,0.2)', color: req.status === 'Completed' ? 'var(--success)' : 'var(--warning)' }}>
                          {req.status}
                        </div>
                      </td>
                      <td>
                        <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}><ChevronRight /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-layout" style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      {/* Mobile Overlay */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <div className={`admin-sidebar glass-panel ${isSidebarOpen ? 'open' : ''}`}>
        <div className="p-4 d-flex justify-between align-center border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <div className="d-flex align-center gap-2">
             <Activity color="var(--primary)" size={24} />
             <h2 style={{ fontSize: '20px', margin: 0, color: 'white' }}>MedAdmin</h2>
          </div>
          <button className="close-sidebar-btn" onClick={toggleSidebar} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
             <X size={24} />
          </button>
        </div>
        
        <div className="sidebar-nav mt-4" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0 16px' }}>
          <button className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
            <LayoutDashboard size={20} /> Overview
          </button>
          <button className={`nav-tab ${activeTab === 'ambulances' ? 'active' : ''}`} onClick={() => setActiveTab('ambulances')}>
            <Ambulance size={20} /> Ambulances
          </button>
          <button className={`nav-tab ${activeTab === 'drivers' ? 'active' : ''}`} onClick={() => setActiveTab('drivers')}>
            <Users size={20} /> Drivers
          </button>
          <button className={`nav-tab ${activeTab === 'requests' ? 'active' : ''}`} onClick={() => setActiveTab('requests')}>
            <AlertTriangle size={20} /> Requests
          </button>
        </div>
        
        <div style={{ position: 'absolute', bottom: '24px', left: '16px', right: '16px' }}>
           <button className="btn-secondary w-100" onClick={() => navigate('/')}>Exit Admin</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="admin-main" style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
        <div className="d-flex align-center gap-3 mb-4 header-mobile">
          <button onClick={toggleSidebar} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex' }}>
            <Menu size={28} />
          </button>
          <h1 style={{ fontSize: '20px', margin: 0 }}>Dashboard</h1>
        </div>
        
        {renderContent()}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .admin-sidebar {
          width: 280px;
          height: 100vh;
          position: fixed;
          top: 0;
          left: -280px;
          z-index: 2000;
          border-radius: 0;
          border-left: none;
          border-top: none;
          border-bottom: none;
          transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(15, 16, 21, 0.95);
        }
        
        .admin-sidebar.open {
          left: 0;
        }

        .close-sidebar-btn { display: block; }
        .header-mobile { display: flex; }

        @media (min-width: 1024px) {
          .admin-sidebar {
            position: sticky;
            left: 0;
            width: 280px;
          }
          .close-sidebar-btn { display: none; }
          .header-mobile { display: none; }
          .sidebar-overlay { display: none !important; }
        }

        .sidebar-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1999;
        }

        .nav-tab {
          background: none;
          border: none;
          color: var(--text-muted);
          padding: 14px 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.2s;
          text-align: left;
          width: 100%;
        }

        .nav-tab:hover {
          background: rgba(255,255,255,0.05);
          color: white;
        }

        .nav-tab.active {
          background: rgba(255, 59, 48, 0.1);
          color: var(--primary);
          font-weight: 600;
        }

        .admin-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .admin-card {
           padding: 24px;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        .admin-table th {
          text-align: left;
          padding: 16px;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .admin-table td {
          padding: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-size: 15px;
        }

        .admin-table tr:hover td {
          background: rgba(255,255,255,0.02);
        }

        .status-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          borderRadius: 50%;
          border-radius: 50%;
          margin-right: 8px;
        }
        
        .status-green { background: var(--success); }
        .status-red { background: var(--primary); }
        .status-yellow { background: var(--warning); }
        .status-blue { background: #2b5bf4; }
        .status-gray { background: var(--text-muted); }
      `}} />
    </div>
  );
};

export default AdminDashboard;
