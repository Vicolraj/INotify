import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Bell, Eye, Menu, X, LogOut, Send, AlertTriangle } from 'lucide-react';
import './App.css';

// --- SHARED COMPONENTS ---
const Navbar = () => (
  <nav className="glass fixed top-0 w-full z-50 flex justify-between items-center px-10 py-5">
    <Link to="/" className="text-2xl font-extrabold tracking-tighter">INOTIFY<span className="text-red-600">_</span></Link>
    <div className="space-x-8 font-medium">
      <Link to="/login" className="hover:text-red-500 transition">Login</Link>
      <Link to="/signup" className="bg-red-600 px-6 py-2 rounded-full hover:bg-red-700 transition shadow-lg shadow-red-600/20">Get Started</Link>
    </div>
  </nav>
);

// --- 1. HOMEPAGE ---
const Home = () => (
  <div className="pt-32">
    <Navbar />
    <div className="flex flex-col items-center text-center px-5">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border border-red-500/30 px-4 py-1 rounded-full text-xs text-red-500 bg-red-500/5 mb-6">
        NEXT-GEN RURAL SECURITY
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-8xl font-extrabold text-gradient mb-6">
        Defending the <br/> Unconnected.
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-2xl text-gray-400 text-lg mb-10">
        Bridging the safety gap in rural areas with AI weapon detection and radio-based SOS alerts that require zero data.
      </motion.p>
      
      <div className="flex gap-4">
        <Link to="/signup" className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">Deploy System</Link>
        <button className="glass px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition">View Architecture</button>
      </div>

      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="mt-20">
        <img src="https://via.placeholder.com/800x400/111/ed1c24?text=INotify+Sleek+Device+Mockup" alt="Mockup" className="rounded-3xl border border-white/10 shadow-2xl" />
      </motion.div>
    </div>
  </div>
);

// --- 2. SIGNUP ---
const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(form));
    navigate('/login');
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass p-10 rounded-3xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Create <span>Identity</span></h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input className="w-full bg-white/5 border border-white/10 p-4 rounded-xl" placeholder="Full Name" required onChange={e => setForm({...form, name: e.target.value})} />
          <input className="w-full bg-white/5 border border-white/10 p-4 rounded-xl" placeholder="Email Address" type="email" required onChange={e => setForm({...form, email: e.target.value})} />
          <input className="w-full bg-white/5 border border-white/10 p-4 rounded-xl" placeholder="Password" type="password" required onChange={e => setForm({...form, password: e.target.value})} />
          <button className="w-full bg-red-600 p-4 rounded-xl font-bold mt-4 shadow-lg shadow-red-600/30">Sign Up</button>
        </form>
      </motion.div>
    </div>
  );
};

// --- 3. LOGIN ---
const Login = () => {
  const [creds, setCreds] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem('user'));
    if(saved && saved.email === creds.email && saved.password === creds.password) {
      localStorage.setItem('session', 'true');
      navigate('/dashboard');
    } else alert("Access Denied");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass p-10 rounded-3xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">System <span>Auth</span></h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input className="w-full bg-white/5 border border-white/10 p-4 rounded-xl" placeholder="Email" type="email" onChange={e => setCreds({...creds, email: e.target.value})} />
          <input className="w-full bg-white/5 border border-white/10 p-4 rounded-xl" placeholder="Password" type="password" onChange={e => setCreds({...creds, password: e.target.value})} />
          <button className="w-full bg-red-600 p-4 rounded-xl font-bold">Login</button>
        </form>
      </motion.div>
    </div>
  );
};

// --- 4. DASHBOARD ---
const Dashboard = () => {
  const [alert, setAlert] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAlert(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen flex transition-colors duration-1000 ${alert ? 'bg-red-950/20' : 'bg-black'}`}>
      <aside className="w-64 glass m-4 rounded-3xl p-6 hidden md:block">
        <h3 className="font-bold text-red-500 mb-10">INOTIFY OPS</h3>
        <nav className="space-y-6">
          <div className="flex items-center gap-3 text-red-500"><Shield size={20}/> Live Feed</div>
          <Link to="/feedback" className="flex items-center gap-3 text-gray-500 hover:text-white"><Send size={20}/> Feedback</Link>
          <Link to="/" className="flex items-center gap-3 text-gray-500 hover:text-white"><LogOut size={20}/> Exit</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Sentinel AI <span className="text-xs bg-red-600 px-2 rounded">LIVE</span></h1>
          {alert && <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity }} className="text-red-500 font-bold flex items-center gap-2"><AlertTriangle/> THREAT DETECTED</motion.div>}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass rounded-3xl overflow-hidden relative border-2 border-red-500/20">
            <img src={alert ? "https://via.placeholder.com/800x450/200/ffffff?text=AI+ALERT:+RIFLE+DETECTED" : "https://via.placeholder.com/800x450/000/333?text=SCANNING+SECTOR+A"} alt="Feed" className="w-full" />
            <div className="absolute top-4 left-4 glass px-3 py-1 rounded text-xs">CAM_NORTH_01</div>
          </div>
          <div className="glass rounded-3xl p-6">
            <h4 className="font-bold mb-4">Signal Status</h4>
            <div className="space-y-4">
              <div className="flex justify-between text-sm"><span>LoRa Gateway</span> <span className="text-green-500">Online</span></div>
              <div className="flex justify-between text-sm"><span>Police Sync</span> <span className="text-green-500">Active</span></div>
              <div className="flex justify-between text-sm"><span>Village Node B</span> <span className="text-red-500">Offline</span></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- 5. FEEDBACK ---
const Feedback = () => {
  const [msg, setMsg] = useState("");
  const [logs, setLogs] = useState(JSON.parse(localStorage.getItem('logs')) || []);

  const send = () => {
    const newLogs = [...logs, { msg, time: new Date().toLocaleTimeString() }];
    setLogs(newLogs);
    localStorage.setItem('logs', JSON.stringify(newLogs));
    setMsg("");
  };

  return (
    <div className="min-h-screen p-10">
      <div className="max-w-3xl mx-auto glass p-10 rounded-3xl">
        <h2 className="text-3xl font-bold mb-6">System <span>Maintenance Logs</span></h2>
        <div className="flex gap-4 mb-10">
          <input className="flex-1 glass p-4 rounded-xl" placeholder="Report issue..." value={msg} onChange={e => setMsg(e.target.value)} />
          <button onClick={send} className="bg-red-600 px-8 rounded-xl font-bold">Post Log</button>
        </div>
        <div className="space-y-4">
          {logs.map((l, i) => (
            <motion.div key={i} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="border-l-2 border-red-600 bg-white/5 p-4 rounded-r-xl">
              <span className="text-xs text-gray-500">{l.time}</span>
              <p>{l.msg}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- APP ROUTER ---
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}