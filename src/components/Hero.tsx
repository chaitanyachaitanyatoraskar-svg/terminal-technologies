"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Zap, Users, ShieldCheck } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreClick, onContactClick }: HeroProps) {
  const kpis = [
    {
      icon: <Award className="text-secondary" size={24} />,
      value: "30+",
      label: "Years Experience",
      description: "Established in 1993",
    },
    {
      icon: <Zap className="text-secondary" size={24} />,
      value: "2 Billion+",
      label: "Connections Annually",
      description: "Global supply rate",
    },
    {
      icon: <Users className="text-secondary" size={24} />,
      value: "1000+",
      label: "Employees",
      description: "Dedicated workforce",
    },
    {
      icon: <ShieldCheck className="text-secondary" size={24} />,
      value: "500+",
      label: "Customers",
      description: "Trusted global OEMs",
    },
  ];

  return (
    <section className="relative h-screen min-h-[750px] w-full flex items-center overflow-hidden bg-primary">
      {/* Background Image and Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwqmifgN7qSj-IRet5_s58lCQjGXTIKrDsY5eRPtFbEwVk5AkBCaZnZEZT7GKRCI3Fqvhwe5KDsDD4n96e3bslZflNIghGRWtxJDyXwL4HFrDxyzqQOou0gG91_V48DATURR_6m-Z37ecVO1cSyma2wzeu9ysRKbTR_cLceqTGOZCPic4KAqtbOsXOe6rE6N8TiwSWXYkjLG9aP5vxoB-ScQn-96xg3yabQ4fL4lRaWO3qdrCrxZ3dwyuh9Iz3oW86HNFep4jZz6E"
          alt="Precision Connector Automation Line"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-primary/85 z-10" />
        {/* Gradients and Cinematic Highlights */}
        <div className="absolute inset-0 hero-gradient z-20" />
        <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vh] bg-secondary/15 rounded-full blur-[120px] pointer-events-none z-10" />
        <div className="absolute bottom-[-10%] right-[10%] w-[30vw] h-[30vh] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-30 max-w-[1400px] mx-auto w-full px-5 md:px-[80px] grid grid-cols-12 gap-6 pt-[80px]">
        {/* Text Area */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            {/* Tag */}
            <div className="inline-flex items-center self-start px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-white font-manrope text-xs md:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-ping" />
              Tier-1 Automotive Partner
            </div>

            {/* Main Heading */}
            <h1 className="font-manrope text-[40px] md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Precision Engineering for <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed-dim via-[#79a6f6] to-white">
                Global Mobility
              </span>
            </h1>

            {/* Subheading */}
            <p className="font-inter text-base md:text-lg text-white/80 leading-[1.7] max-w-2xl mb-10">
              Terminal Technologies is one of India’s leading manufacturers of
              terminals, connectors, fuse boxes, relay bases and
              interconnection solutions serving automotive, electronics,
              electrical and appliance industries globally.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onExploreClick}
                className="px-8 py-4 bg-secondary text-white font-manrope font-semibold rounded-radius-button hover:bg-primary border border-secondary transition-all duration-300 shadow-lg flex items-center gap-2 group hover:scale-[1.03]"
              >
                Explore Solutions
                <ArrowUpRight size={18} className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform" />
              </button>
              <button
                onClick={onContactClick}
                className="px-8 py-4 border border-white/30 text-white font-manrope font-semibold rounded-radius-button hover:bg-white hover:text-primary transition-all duration-300 hover:scale-[1.03]"
              >
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating KPI Cards Container (Hidden on Mobile/Tablet for layout safety) */}
        <div className="hidden lg:col-span-5 lg:flex flex-col justify-center items-end gap-5">
          {kpis.map((kpi, idx) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
              whileHover={{ scale: 1.03, x: -5 }}
              className="glass-card w-[320px] p-5 rounded-radius-container shadow-2xl flex items-center gap-4 border border-white/20 transition-all cursor-default"
            >
              <div className="p-3 rounded-radius-button bg-primary/10 border border-white/30 flex items-center justify-center shrink-0">
                {kpi.icon}
              </div>
              <div>
                <h4 className="font-manrope text-2xl font-bold text-primary leading-none">
                  {kpi.value}
                </h4>
                <p className="font-inter text-sm font-semibold text-primary/80 mt-1">
                  {kpi.label}
                </p>
                <p className="font-inter text-xs text-primary/60">
                  {kpi.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Wave/Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-background-custom to-transparent z-20 pointer-events-none" />
    </section>
  );
}
