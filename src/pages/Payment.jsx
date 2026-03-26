import React, { useState } from 'react';
import { CreditCard, Wallet, Landmark, Receipt, CheckCircle, ChevronLeft } from 'lucide-react';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = () => {
    if (!selectedMethod) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 2000);
  };

  if (isPaid) {
    return (
      <div className="page-container d-flex flex-column align-center justify-center fade-in" style={{ height: '80vh' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(52, 199, 89, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
          <CheckCircle size={40} color="var(--success)" />
        </div>
        <h2 style={{ marginBottom: '8px' }}>Payment Successful</h2>
        <p className="text-muted text-center" style={{ marginBottom: '32px' }}>
          Your driver has been notified. Thank you for using MedRescue!
        </p>
        
        <div className="glass-panel w-100" style={{ padding: '24px' }}>
           <div className="d-flex justify-between mb-2 pb-2" style={{ borderBottom: '1px dashed rgba(255,255,255,0.1)' }}>
             <span className="text-muted">Transaction ID</span>
             <span>TXN-884291</span>
           </div>
           <div className="d-flex justify-between mt-2 pt-2">
             <span className="text-muted">Amount Paid</span>
             <span style={{ fontWeight: 'bold' }}>$45.00</span>
           </div>
           <button className="btn-secondary w-100 mt-4" onClick={() => window.location.href='/'}>
             Back to Home
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container" style={{ paddingBottom: '90px' }}>
      <div className="glass-header d-flex align-center gap-2" style={{ padding: '16px', borderRadius: '16px', marginBottom: '24px' }}>
        <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex' }}>
          <ChevronLeft size={24} />
        </button>
        <h2 style={{ fontSize: '20px', margin: 0 }}>Review Trip Fare</h2>
      </div>

      <div className="glass-panel slide-up p-4 mb-4 text-center" style={{ padding: '30px' }}>
        <div className="text-muted mb-2">Estimated Fare</div>
        <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--primary)' }}>$45.00</div>
        
        <div className="d-flex justify-between mt-4 pb-2 text-muted" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <span>Base Fare</span>
          <span>$25.00</span>
        </div>
        <div className="d-flex justify-between mt-2 pt-2 text-muted">
          <span>Distance (4.8 km)</span>
          <span>$20.00</span>
        </div>
      </div>

      <h4 className="mb-3 text-muted" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Payment Method</h4>
      
      <div className="d-flex flex-column gap-2 mb-4 slide-up" style={{ animationDelay: '0.1s' }}>
        <label className="glass-panel d-flex align-center gap-3" style={{ padding: '16px', cursor: 'pointer', border: selectedMethod === 'upi' ? '1px solid var(--primary)' : '' }}>
          <input type="radio" name="payment" value="upi" onChange={() => setSelectedMethod('upi')} style={{ accentColor: 'var(--primary)', width: '20px', height: '20px' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
            <Wallet color={selectedMethod === 'upi' ? "var(--primary)" : "var(--text-muted)"} />
            <span style={{ fontSize: '16px' }}>UPI / Digital Wallet</span>
          </div>
        </label>

        <label className="glass-panel d-flex align-center gap-3" style={{ padding: '16px', cursor: 'pointer', border: selectedMethod === 'card' ? '1px solid var(--primary)' : '' }}>
          <input type="radio" name="payment" value="card" onChange={() => setSelectedMethod('card')} style={{ accentColor: 'var(--primary)', width: '20px', height: '20px' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
            <CreditCard color={selectedMethod === 'card' ? "var(--primary)" : "var(--text-muted)"} />
            <span style={{ fontSize: '16px' }}>Credit / Debit Card</span>
          </div>
        </label>
        
        <label className="glass-panel d-flex align-center gap-3" style={{ padding: '16px', cursor: 'pointer', border: selectedMethod === 'cash' ? '1px solid var(--primary)' : '' }}>
          <input type="radio" name="payment" value="cash" onChange={() => setSelectedMethod('cash')} style={{ accentColor: 'var(--primary)', width: '20px', height: '20px' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
            <Landmark color={selectedMethod === 'cash' ? "var(--primary)" : "var(--text-muted)"} />
            <span style={{ fontSize: '16px' }}>Cash to Driver</span>
          </div>
        </label>
      </div>

      <button 
        className="btn-primary w-100 slide-up" 
        style={{ padding: '16px', animationDelay: '0.2s', opacity: selectedMethod && !isProcessing ? 1 : 0.6 }}
        disabled={!selectedMethod || isProcessing}
        onClick={handlePay}
      >
        {isProcessing ? 'Processing Payment...' : 'Proceed to Pay'}
      </button>
    </div>
  );
};

export default Payment;
