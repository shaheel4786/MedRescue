import React from 'react';
import { ShieldAlert, Navigation, Hospital, CheckCircle, ChevronLeft } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "1-Tap Emergency Request",
      description: "Press the SOS button on your home screen. Our system instantly captures your exact GPS location to dispatch the nearest available ambulance immediately.",
      icon: <ShieldAlert color="#fff" size={24} />,
      color: "var(--primary)"
    },
    {
      id: 2,
      title: "Real-Time Tracking",
      description: "Once assigned, you can track the ambulance live on the map. You will see the driver's details, estimated time of arrival, and have options to call or chat securely.",
      icon: <Navigation color="#fff" size={24} />,
      color: "#2b5bf4"
    },
    {
      id: 3,
      title: "Hospital Integration",
      description: "Your critical medical information (allergies, blood group) is shared with the responding medics, and the destination hospital is pre-alerted about your arrival for faster treatment.",
      icon: <Hospital color="#fff" size={24} />,
      color: "var(--warning)"
    },
    {
      id: 4,
      title: "Care Delivered",
      description: "Upon arrival, the medics provide immediate stabilizing care. Seamless cashless payment options are available post-ride so you can focus entirely on recovery.",
      icon: <CheckCircle color="#fff" size={24} />,
      color: "var(--success)"
    }
  ];

  return (
    <div className="page-container" style={{ paddingBottom: '90px' }}>
      <div className="glass-header d-flex align-center gap-2" style={{ padding: '16px', borderRadius: '16px', marginBottom: '24px' }}>
        <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex' }}>
          <ChevronLeft size={24} />
        </button>
        <h2 style={{ fontSize: '20px', margin: 0 }}>How It Works</h2>
      </div>

      <div className="text-center slide-up mb-4">
        <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Fast. Reliable. Lifesaving.</h3>
        <p className="text-muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>
          MedRescue simplifies emergency medical transport, ensuring that help reaches you exactly when every second counts.
        </p>
      </div>

      <div className="timeline-container">
        {steps.map((step, index) => (
          <div key={step.id} className="timeline-item slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="timeline-icon-wrapper">
              <div className="timeline-line" style={{ display: index === steps.length - 1 ? 'none' : 'block' }}></div>
              <div className="timeline-icon" style={{ backgroundColor: step.color }}>
                {step.icon}
              </div>
            </div>
            <div className="glass-panel timeline-content">
              <h4 style={{ margin: '0 0 8px', fontSize: '18px', color: step.color }}>{step.id}. {step.title}</h4>
              <p className="text-muted" style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .timeline-item {
          display: flex;
          gap: 16px;
        }

        .timeline-icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .timeline-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          z-index: 2;
        }

        .timeline-line {
          position: absolute;
          top: 48px;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 1;
        }

        .timeline-content {
          flex: 1;
          padding: 20px;
          margin-bottom: 8px;
        }
      `}} />
    </div>
  );
};

export default HowItWorks;
