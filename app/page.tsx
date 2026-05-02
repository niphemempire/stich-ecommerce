"use client";

import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  BarChart3, 
  Cpu, 
  Globe, 
  Layers, 
  Zap, 
  Menu,
  X,
  Settings,
  Activity
} from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden font-sans">
      {/* Structural Ribbons - Vertical Text Accent */}
      <div className="fixed left-0 top-0 bottom-0 w-12 border-r border-soft hidden lg:flex items-center justify-center z-40 bg-[#0A0A0A]">
        <div className="vertical-text text-[10px] tracking-[0.5em] uppercase text-white/30 whitespace-nowrap">
          PULSE CORE INFRASTRUCTURE — VOL. 01 / GRID
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-soft bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-12 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="text-xs font-bold tracking-[0.4em] uppercase">PULSE / AI</div>
          </div>
          
          <div className="hidden md:flex items-center gap-12 text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
            <button className="hover:text-[#D4AF37] transition-colors">Archive</button>
            <button className="hover:text-[#D4AF37] transition-colors">Perspective</button>
            <button className="hover:text-[#D4AF37] transition-colors">Nodes</button>
            <button className="hover:text-[#D4AF37] transition-colors">Contact</button>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-[10px] font-bold tracking-widest uppercase border border-soft px-6 py-3 hover:bg-white hover:text-black transition-all">
              Initialize
            </button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - RAW Form Styling */}
      <section className="pt-48 pb-24 px-12 lg:pl-32 max-w-7xl mx-auto relative">
        <div className="relative">
          <div className="text-[180px] font-black text-white/5 absolute -top-32 -left-16 select-none tracking-tighter leading-none">
            BRUTAL
          </div>
          
          <div className="relative z-10">
            <h1 className="display-text md:text-[140px] text-7xl mb-12">
              RAW<br />
              <span className="serif-italic">Neural</span><br />
              FORMS
            </h1>
            
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
              <div className="max-w-sm text-sm text-white/60 leading-relaxed font-light">
                An exploration of neural integrity and the poetic weight of industrial compute. 
                Optimized for low-latency mass-deployment across alpine data clusters.
              </div>
              
              <div className="flex gap-4">
                <button className="h-16 w-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-black hover:bg-white transition-colors group">
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Start Deploy</span>
                  <span className="text-xs font-medium border-b border-[#D4AF37]/30 pb-0.5">View Project 224</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aside Detail Box */}
        <div className="hidden xl:block absolute right-12 top-48 w-80 p-8 border border-soft bg-zinc-900/20 backdrop-blur-sm">
          <div className="text-[10px] tracking-widest text-[#D4AF37] font-bold uppercase mb-6">Structural Node 01</div>
          <div className="h-48 w-full bg-zinc-900 overflow-hidden mb-6">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" 
              alt="Structural" 
              className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
          <p className="text-[11px] text-white/40 leading-snug italic font-serif">
            "The cantilevered neural net provides a dramatic overhang, creating deep computational shadows."
          </p>
        </div>
      </section>

      {/* Grid Features - Monolithic Columns */}
      <section className="border-t border-soft">
        <div className="max-w-7xl mx-auto lg:pl-12 grid grid-cols-1 md:grid-cols-3">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="border-b md:border-b-0 md:border-r border-soft p-12 hover:bg-white/5 transition-all group"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-bold text-white/20 italic font-serif tracking-widest">PROTOCAL_0{i+1}</span>
                <feature.icon size={20} className="text-[#D4AF37] group-hover:scale-125 transition-transform" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">{feature.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/80 transition-colors uppercase tracking-wider">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Log View - Industrial Table */}
      <section className="py-32 px-12 lg:pl-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 mb-12 border-b border-soft pb-6">
          <h2 className="text-4xl font-black uppercase tracking-tighter">System Metric Stream</h2>
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">
            {["dashboard", "network", "logs"].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`transition-all hover:text-white ${activeTab === tab ? "text-[#D4AF37]" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-transparent overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-[100px_1.5fr_1fr_120px] px-8 py-4 bg-white/5 text-white/40">
            <span className="text-[9px] font-bold uppercase tracking-widest">Entity</span>
            <span className="text-[9px] font-bold uppercase tracking-widest">Logic</span>
            <span className="text-[9px] font-bold uppercase tracking-widest">Origin</span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-right">Delta</span>
          </div>

          <div className="divide-y divide-soft">
            {logs.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-[100px_1.5fr_1fr_120px] px-8 py-8 hover:bg-[#D4AF37] hover:text-black transition-all group cursor-crosshair"
              >
                <span className="text-[10px] font-bold block mb-1 group-hover:text-black/60 transition-colors uppercase">{log.id}</span>
                <span className="font-black text-sm uppercase tracking-tighter">{log.op}</span>
                <span className="text-[10px] tracking-widest uppercase opacity-40 group-hover:opacity-100">{log.node}</span>
                <span className="font-black text-xs text-right group-hover:text-black tracking-tight">{log.latency}MS</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Multi-Col Monolith */}
      <footer className="border-t border-soft py-20 px-12 lg:pl-32 bg-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-black tracking-tighter uppercase mb-6">PULSE.AI</div>
            <p className="text-[10px] text-white/30 uppercase tracking-widest leading-loose">
              High-altitude neural infrastructure. <br />Vals, Switzerland
            </p>
          </div>
          
          {[
            { title: "Infrastructure", links: ["Nodes", "Grip", "Latency", "Uptime"] },
            { title: "Perspective", links: ["Case Study", "Journal", "Archive", "Raw Data"] },
            { title: "Studio", links: ["About", "Careers", "Legal", "Initialize"] }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-8 italic italic-serif">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-4 border-t border-soft">
           <div className="p-8 border-r border-soft flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Year</span>
              <span className="text-xs font-bold font-mono">2026.04</span>
           </div>
           <div className="p-8 border-r border-soft flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Photography</span>
              <span className="text-xs font-bold font-serif italic text-[#D4AF37]">Unsplash / Curated</span>
           </div>
           <div className="p-8 border-r border-soft flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Latency</span>
              <span className="text-xs font-bold font-mono">0.00ms Threshold</span>
           </div>
           <div className="bg-[#D4AF37] p-8 flex items-center justify-between cursor-pointer text-black hover:bg-white transition-all duration-500 overflow-hidden relative group">
              <span className="text-xs font-bold uppercase tracking-widest z-10">System Status</span>
              <span className="text-[8px] font-black absolute -bottom-1 -right-2 opacity-5 scale-150 rotate-12 group-hover:opacity-20 transition-opacity">OPERATIONAL</span>
              <div className="w-4 h-4 rounded-full bg-black animate-pulse" />
           </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          className="fixed inset-0 z-[100] bg-[#0A0A0A] text-white p-12 flex flex-col"
        >
          <div className="flex justify-between items-center mb-20">
            <span className="font-bold text-2xl tracking-tighter">PULSE / AI</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-8 text-5xl font-black uppercase tracking-tighter italic italic-serif">
            <button className="text-left hover:text-[#D4AF37] transition-colors leading-[0.8] mb-4">ARCHIVE</button>
            <button className="text-left hover:text-[#D4AF37] transition-colors leading-[0.8] mb-4">JOURNAL</button>
            <button className="text-left hover:text-[#D4AF37] transition-colors leading-[0.8] mb-4">PERSPECTIVE</button>
            <button className="text-left hover:text-[#D4AF37] transition-colors leading-[0.8] mb-4">LOGS</button>
          </div>
          <div className="mt-auto flex flex-col gap-6">
             <button className="w-full py-6 bg-[#D4AF37] text-black font-black uppercase tracking-widest">INITIALIZE GRID</button>
             <button className="w-full py-6 border border-soft text-white/40 font-black uppercase tracking-widest">LOG IN</button>
          </div>
        </motion.div>
      )}

      <style jsx global>{`
        .display-text {
          font-family: var(--font-sans);
          font-size: 140px;
          line-height: 0.8;
          letter-spacing: -0.04em;
          font-weight: 900;
          text-transform: uppercase;
        }
        .serif-italic {
          font-family: var(--font-serif);
          font-style: italic;
          color: #D4AF37;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        .border-soft {
          border-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </main>
  );
}

const features = [
  {
    icon: Cpu,
    title: "Native Compute",
    desc: "Direct access to silicon. Our orchestration layer bypasses traditional virtualization for raw performance."
  },
  {
    icon: Layers,
    title: "Edge Meshing",
    desc: "Intelligent request routing across 240+ global POPs. Minimizing latency between model and user."
  },
  {
    icon: Zap,
    title: "Instant Scaling",
    desc: "Go from 1 to 10,000 nodes in under 2 seconds. Zero cold starts, zero frustration."
  },
  {
    icon: Settings,
    title: "Auto-Tuning",
    desc: "Machine learning applied to infra. Pulse automatically reconfigures your stack based on traffic load."
  },
  {
    icon: Globe,
    title: "Global Mesh",
    desc: "Secure, private networking between all your services regardless of region or provider."
  },
  {
    icon: BarChart3,
    title: "Observability",
    desc: "Every packet, every cycle, tracked in real-time. Full visibility for high-stakes deployments."
  }
];

const logs = [
  { id: "PX-882", op: "NODE_INITIALIZE", node: "lon_01_a", latency: "142", status: "ok" },
  { id: "PX-883", op: "MESH_HANDSHAKE", node: "sin_04_c", latency: "64", status: "ok" },
  { id: "PX-884", op: "AUTH_VERIFY", node: "nyc_02_b", latency: "12", status: "ok" },
  { id: "PX-885", op: "PACKET_ROUTE", node: "tok_01_a", latency: "256", status: "fail" },
  { id: "PX-886", op: "CACHE_INVALIDATE", node: "fra_02_d", latency: "4", status: "ok" },
  { id: "PX-887", op: "NODE_HEARTBEAT", node: "lon_01_a", latency: "8", status: "ok" },
  { id: "PX-888", op: "INFERENCE_EXEC", node: "sjc_03_b", latency: "890", status: "ok" },
];
