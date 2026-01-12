import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, AlertTriangle, Radio, Activity, Eye, LogOut, 
  Send, User, ChevronRight, Globe, Zap, Users, CheckCircle, 
  Smartphone, ShieldAlert, Database
} from 'lucide-react';
import './App.css';

// --- STYLING OBJECT ---
const styles = {
  container: { backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' },
  nav: { position: 'fixed', top: 0, width: '100%', backgroundColor: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1e293b', zIndex: 1000, padding: '0 2rem', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' },
  section: { padding: '100px 2rem', maxWidth: '1200px', margin: '0 auto' },
  hero: { minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
  card: { backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '1.5rem', padding: '2rem' },
  primaryBtn: { backgroundColor: '#dc2626', color: 'white', padding: '0.8rem 2rem', borderRadius: '9999px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', transition: '0.3s' },
  input: { width: '100%', padding: '0.8rem', backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '0.6rem', color: 'white', marginBottom: '1rem', boxSizing: 'border-box' },
  badge: { color: '#ef4444', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '2px', marginBottom: '1rem', display: 'block' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }
};

// Product images: load from `src/assets/` using Vite's import.meta.glob
// Put your images in `src/assets/` (e.g. product1.jpg, product2.jpg)
const _prod = import.meta.glob('./assets/*.{jpg,png,jpeg}', { eager: true, as: 'url' });
const productImages = Object.values(_prod);
// Fallback to a placeholder if none found
if (productImages.length === 0) productImages.push('/favicon.png');

// --- COMPONENTS ---

// 1. HOME PAGE (Scrollable)
const Home = ({ setPage }) => {
  const [prodIndex, setProdIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setProdIndex(i => (i + 1) % productImages.length), 4000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setProdIndex(i => (i - 1 + productImages.length) % productImages.length);
  const next = () => setProdIndex(i => (i + 1) % productImages.length);

  return (
    <div style={{ paddingTop: '70px' }}>
    {/* Hero Section */}
    <section style={styles.hero}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <span style={styles.badge}>INOTIFY NG</span>
        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: '900', margin: '0 0 1.5rem 0' }}>
          Bridging the <span style={{ color: '#ef4444' }}>Security Gap.</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
          An ecosystem designed for rural resilience. Combining hardware panic buttons, AI threat detection, 
          and LoRaWAN mesh networking to protect the unconnected.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button style={styles.primaryBtn} onClick={() => setPage('signup')}>Get Started</button>
          <button style={{ ...styles.primaryBtn, backgroundColor: 'transparent', border: '1px solid #334155' }} onClick={() => document.getElementById('details').scrollIntoView({behavior:'smooth'})}>System Details</button>
        </div>
      </motion.div>
    </section>

    {/* Goals & Features Section */}
    <section id="details" style={{ ...styles.section, borderTop: '1px solid #1e293b' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>Our Systems Engineering Goals</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <ShieldAlert size={40} color="#ef4444" style={{ marginBottom: '1rem' }} />
          <h3>Rapid Response</h3>
          <p style={{ color: '#94a3b8' }}>Targeting sub-5-minute alerts for police and community leaders in areas with zero internet.</p>
        </div>
        <div style={styles.card}>
          <Globe size={40} color="#ef4444" style={{ marginBottom: '1rem' }} />
          <h3>Mesh Connectivity</h3>
          <p style={{ color: '#94a3b8' }}>Utilizing LoRaWAN gateways to create a private "free internet" network for security data.</p>
        </div>
        <div style={styles.card}>
          <Database size={40} color="#ef4444" style={{ marginBottom: '1rem' }} />
          <h3>Local AI Processing</h3>
          <p style={{ color: '#94a3b8' }}>Cameras process threat data on the device (Edge Computing) to save bandwidth.</p>
        </div>
      </div>
    </section>

    {/* Product Placeholder Section */}
    <section style={{ ...styles.section, backgroundColor: '#020617' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div style={{ ...styles.card, minHeight: '400px', background: '#020617', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={productImages[prodIndex]} alt={`Product ${prodIndex + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12, display: 'block' }} />
            <button onClick={prev} aria-label="Previous image" style={{ position: 'absolute', top: '50%', left: 12, transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', width: 44, height: 44, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>‹</button>
            <button onClick={next} aria-label="Next image" style={{ position: 'absolute', top: '50%', right: 12, transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', width: 44, height: 44, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>›</button>
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Professional Hardware</h2>
          <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>Our 'Double-Click' Alerter is built for harsh rural environments. It is dust-proof, water-resistant, and operates on a 12-month lithium battery.</p>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
            <li style={{ marginBottom: '10px' }}><CheckCircle color="#ef4444" size={16} /> 10km Range (LoRa Mode)</li>
            <li style={{ marginBottom: '10px' }}><CheckCircle color="#ef4444" size={16} /> Tactile False-Alarm Prevention</li>
            <li><CheckCircle color="#ef4444" size={16} /> Real-time GPS Triangulation</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  );

};

// 2. AUTH PAGES (Login & Signup)
const Auth = ({ type, setPage, login }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '0 2rem' }}>
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ ...styles.card, width: '100%', maxWidth: '400px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>{type === 'login' ? 'Officer Login' : 'System Registration'}</h2>
      <input style={styles.input} type="email" placeholder="Email Address" />
      <input style={styles.input} type="password" placeholder="Password" />
      {type === 'signup' && <input style={styles.input} type="text" placeholder="Officer Badge ID" />}
      <button style={{ ...styles.primaryBtn, width: '100%', marginTop: '1rem' }} onClick={() => { login(); setPage('dashboard'); }}>
        {type === 'login' ? 'Access Dashboard' : 'Create Account'}
      </button>
      <p style={{ textAlign: 'center', fontSize: '0.9rem', marginTop: '1.5rem', color: '#64748b' }}>
        {type === 'login' ? "New officer?" : "Already registered?"} 
        <span style={{ color: '#ef4444', cursor: 'pointer', marginLeft: '5px' }} onClick={() => setPage(type === 'login' ? 'signup' : 'login')}>
          {type === 'login' ? 'Sign Up' : 'Login'}
        </span>
      </p>
    </motion.div>
  </div>
);

// 3. DASHBOARD
const Dashboard = ({ setPage }) => {
  const [alerts] = useState([
    { id: 1, type: 'CRITICAL', node: 'Node 04 - Market', time: '1m ago' },
    { id: 2, type: 'AI SCAN', node: 'Gate B Camera', time: '12m ago' }
  ]);

  return (
    <div style={{ paddingTop: '100px', paddingLeft: '2rem', paddingRight: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Operations Room</h1>
        <button style={{ ...styles.primaryBtn, backgroundColor: '#1e293b' }} onClick={() => setPage('feedback')}>Field Feedback</button>
      </div>

      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Activity color="#ef4444" />
            <span style={{ color: '#22c55e', fontSize: '0.8rem' }}>LIVE</span>
          </div>
          <h2 style={{ margin: '1rem 0' }}>85%</h2>
          <p style={{ color: '#64748b', fontSize: '0.8rem' }}>AI Scanner Accuracy</p>
        </div>
        <div style={styles.card}>
          <Radio color="#ef4444" />
          <h2 style={{ margin: '1rem 0' }}>12</h2>
          <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Gateways Online</p>
        </div>
        <div style={styles.card}>
          <Users color="#ef4444" />
          <h2 style={{ margin: '1rem 0' }}>1,402</h2>
          <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Active Residents</p>
        </div>
      </div>

      <div style={{ marginTop: '3rem', ...styles.card }}>
        <h3>Emergency Alert Stream</h3>
        {alerts.map(a => (
          <div key={a.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem 0', borderBottom: '1px solid #1e293b' }}>
            <div>
              <strong style={{ color: a.type === 'CRITICAL' ? '#ef4444' : '#f8fafc' }}>{a.type} ALERT</strong>
              <div style={{ color: '#64748b', fontSize: '0.9rem' }}>{a.node}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div>{a.time}</div>
              <small style={{ color: '#ef4444' }}>DISPATCHING...</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. FEEDBACK PAGE
const Feedback = ({ setPage }) => {
  const [reports, setReports] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('inotify_reports') || '[]');
    setReports(saved);
  }, []);

  const saveReport = () => {
    if (!text) return;
    const newReports = [{ id: Date.now(), msg: text, date: new Date().toLocaleString() }, ...reports];
    setReports(newReports);
    localStorage.setItem('inotify_reports', JSON.stringify(newReports));
    setText('');
    alert("Report logged in system database.");
  };

  return (
    <div style={{ paddingTop: '100px', paddingLeft: '2rem', paddingRight: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <button style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', marginBottom: '1rem' }} onClick={() => setPage('dashboard')}>← Back to Dashboard</button>
      <div style={styles.card}>
        <h2 style={{ marginBottom: '1.5rem' }}>System Maintenance & Feedback</h2>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Logged officers can submit hardware failures, AI misidentifications, or field reports here.</p>
        
        <textarea 
          style={{ ...styles.input, height: '120px', resize: 'none' }} 
          placeholder="Describe the issue or feedback..." 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button style={{ ...styles.primaryBtn, width: '100%' }} onClick={saveReport}>
          <Send size={18} style={{ marginRight: '10px' }} /> Submit Log
        </button>

        <div style={{ marginTop: '3rem' }}>
          <h4 style={{ marginBottom: '1rem', borderBottom: '1px solid #1e293b', paddingBottom: '0.5rem' }}>Recent Activity Logs</h4>
          {reports.length === 0 ? <p style={{color:'#334155'}}>No logs submitted yet.</p> : reports.map(r => (
            <div key={r.id} style={{ padding: '1rem', background: '#020617', borderRadius: '0.5rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
              <div style={{ color: '#64748b', fontSize: '0.7rem', marginBottom: '0.5rem' }}>{r.date}</div>
              {r.msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP CONTROLLER ---
export default function App() {
  const [page, setPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setPage('home')}>
           <img src='/favicon.png' alt="INOTIFY" style={{ width: '32px', height: '32px', marginRight: '10px' }} /> INOTIFY
        </div>
        <div>
          <button style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', marginRight: '20px' }} onClick={() => setPage('home')}>Home</button>
          {isLoggedIn ? (
            <button style={styles.primaryBtn} onClick={() => setIsLoggedIn(false)}>Logout</button>
          ) : (
            <button style={styles.primaryBtn} onClick={() => setPage('login')}>Login</button>
          )}
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={page} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {page === 'home' && <Home setPage={setPage} />}
          {page === 'login' && <Auth type="login" setPage={setPage} login={() => setIsLoggedIn(true)} />}
          {page === 'signup' && <Auth type="signup" setPage={setPage} login={() => setIsLoggedIn(true)} />}
          {page === 'dashboard' && <Dashboard setPage={setPage} />}
          {page === 'feedback' && <Feedback setPage={setPage} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}