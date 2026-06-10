"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const Facebook = ({ size = 16 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = ({ size = 16 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = ({ size = 16 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <span className="font-manrope font-extrabold text-xl tracking-tight mb-6 text-white">
              TERMINAL <span className="font-light">TECHNOLOGIES</span>
            </span>
            <p className="font-inter text-sm text-white/70 leading-relaxed max-w-sm mb-6">
              Precision Engineering for Global Mobility. Providing reliable, high-performance interconnection solutions since 1993.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="mailto:info@terminaltechnology.com" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-manrope text-sm font-bold uppercase tracking-wider mb-6 text-white">
              Products
            </h4>
            <div className="flex flex-col gap-3 font-inter text-sm text-white/70">
              <a href="#products" className="hover:text-secondary transition-colors">Terminals</a>
              <a href="#products" className="hover:text-secondary transition-colors">Connectors</a>
              <a href="#products" className="hover:text-secondary transition-colors">Fuse Boxes</a>
              <a href="#products" className="hover:text-secondary transition-colors">Relay Bases</a>
              <a href="#products" className="hover:text-secondary transition-colors">Custom Components</a>
            </div>
          </div>

          {/* Column 3: Industries */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-manrope text-sm font-bold uppercase tracking-wider mb-6 text-white">
              Industries
            </h4>
            <div className="flex flex-col gap-3 font-inter text-sm text-white/70">
              <a href="#industries" className="hover:text-secondary transition-colors">Automotive</a>
              <a href="#industries" className="hover:text-secondary transition-colors">EV Components</a>
              <a href="#industries" className="hover:text-secondary transition-colors">Electronics</a>
              <a href="#industries" className="hover:text-secondary transition-colors">Home Appliances</a>
              <a href="#industries" className="hover:text-secondary transition-colors">Industrial Systems</a>
            </div>
          </div>

          {/* Column 4: Company / Resources */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-manrope text-sm font-bold uppercase tracking-wider mb-6 text-white">
              Company
            </h4>
            <div className="flex flex-col gap-3 font-inter text-sm text-white/70">
              <a href="#about" className="hover:text-secondary transition-colors">About Us</a>
              <a href="#manufacturing" className="hover:text-secondary transition-colors">Manufacturing</a>
              <a href="#innovation" className="hover:text-secondary transition-colors">Innovation</a>
              <a href="#csr" className="hover:text-secondary transition-colors">CSR Program</a>
              <a href="#careers" className="hover:text-secondary transition-colors">Careers</a>
            </div>
          </div>

          {/* Column 5: Newsletter Subscription */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-manrope text-sm font-bold uppercase tracking-wider mb-6 text-white">
              Newsletter
            </h4>
            <p className="font-inter text-xs text-white/70 mb-4 leading-relaxed">
              Stay updated with our latest products, R&D innovations, and catalogs.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-radius-button text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 size={14} className="shrink-0" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="bg-white/10 border border-white/10 rounded-radius-button px-3 py-2 text-xs outline-none focus:border-secondary flex-1 text-white"
                />
                <button
                  type="submit"
                  className="bg-secondary hover:bg-white hover:text-primary px-3 py-2 rounded-radius-button transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-inter text-white/50">
          <p>© 2026 Terminal Technologies (I) Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Quality Manual</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
