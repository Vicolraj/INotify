import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar glass-card">
        <div className="logo">INOTIFY<span>_</span></div>
        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/signup" className="signup-btn">Get Started</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text reveal">
          <span className="badge">AI-POWERED RURAL DEFENSE</span>
          <h1>Security Without <span>Boundaries.</span></h1>
          <p>The world's first data-free insurgency alert system. Designed for the heart of rural communities.</p>
          <div className="actions">
            <Link to="/signup" className="btn-primary btn-glow">Initialize System</Link>
            <button className="btn-outline">Watch Demo</button>
          </div>
        </div>
        <div className="hero-visual floating">
          {/* Use the Alerter Image generated earlier here */}
          <div className="orb-gradient"></div>
        </div>
      </section>

      {/* Feature Section with Scroll Reveal */}
      <section className="scroll-section">
        <div className="feature-card glass-card reveal">
          <h3>01. Sentinel AI</h3>
          <p>Edge-computing visual scanners that detect threats in milliseconds.</p>
        </div>
        <div className="feature-card glass-card reveal" style={{animationDelay: '0.2s'}}>
          <h3>02. LoRa Mesh</h3>
          <p>Proprietary radio network that works where GSM fails.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;