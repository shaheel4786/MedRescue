import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Navigation, Activity, User, MessageSquare, Info } from 'lucide-react';

import Home from './pages/Home';
import Tracking from './pages/Tracking';
import Hospital from './pages/Hospital';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';

import AdminDashboard from './pages/AdminDashboard';

const BottomNavigation = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/admin') return null;

  return (
    <div className="bottom-nav">
      <Link to="/" className={`nav-item ${path === '/' ? 'active' : ''}`}>
        <HomeIcon />
        <span>Home</span>
      </Link>
      <Link to="/track" className={`nav-item ${path === '/track' ? 'active' : ''}`}>
        <Navigation />
        <span>Track</span>
      </Link>
      <Link to="/how-it-works" className={`nav-item ${path === '/how-it-works' ? 'active' : ''}`}>
        <Info />
        <span>Guide</span>
      </Link>
      <Link to="/contact" className={`nav-item ${path === '/contact' ? 'active' : ''}`}>
        <MessageSquare />
        <span>Contact</span>
      </Link>
      <Link to="/activity" className={`nav-item ${path === '/activity' ? 'active' : ''}`}>
        <Activity />
        <span>Activity</span>
      </Link>
      <Link to="/profile" className={`nav-item ${path === '/profile' ? 'active' : ''}`}>
        <User />
        <span>Profile</span>
      </Link>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track" element={<Tracking />} />
        <Route path="/activity" element={<Hospital />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <BottomNavigation />
    </BrowserRouter>
  );
}

export default App;
