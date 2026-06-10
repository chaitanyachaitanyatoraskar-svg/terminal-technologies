"use client";

import { motion } from "framer-motion";
import { Car, Zap, Cpu, Tv, Factory, BatteryCharging } from "lucide-react";

export default function IndustriesServed() {
  const industries = [
    {
      icon: <Car size={36} className="text-secondary group-hover:text-white transition-colors duration-300" />,
      title: "Automotive",
      description: "OEM compliance wiring connectors, fuse systems, and junction relays for passenger and commercial transit.",
    },
    {
      icon: <BatteryCharging size={36} className="text-secondary group-hover:text-white transition-colors duration-300" />,
      title: "EV Components",
      description: "High-voltage distribution boards, heavy-duty battery terminals, and secure cell connectors.",
    },
    {
      icon: <Cpu size={36} className="text-secondary group-hover:text-white transition-colors duration-300" />,
      title: "Electronics",
      description: "Micro-pitch board-to-board plugs, smart-home relay bases, and durable system assemblies.",
    },
    {
      icon: <Zap size={36} className="text-secondary group-hover:text-white transition-colors duration-300" />,
      title: "Electrical",
      description: "Power crimp links, ring lugs, and ground bus terminals supporting high amperage grids safely.",
    },
    {
      icon: <Tv size={36} className="text-secondary group-hover:text-white transition-colors duration-300" />,
      title: "Home Appliances",
      description: "Reliable white-goods wire connections, quick-connect tabs, and thermal switches housings.",
    },
    {
      icon: <Factory size={36} className="text-secondary group-hover:text-white transition-colors duration-300" />,
      title: "Industrial Applications",
      description: "Heavy automation machinery harnesses, terminal strips, and sensor interconnect modules.",
    },
  ];

  return (
    <section id="industries" className="py-[120px] bg-background-custom relative">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px]">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="font-inter text-sm font-semibold tracking-widest text-secondary uppercase mb-3 block">
            Sectors We Empower
          </span>
          <h2 className="font-manrope text-3xl md:text-5xl font-bold text-primary mb-4 leading-tight">
            Interconnection Solutions Across Industries
          </h2>
          <p className="font-inter text-gray-600 text-base">
            Providing high-conductivity, robust, and industry-standard compliant connectivity components globally.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 80, 204, 0.12)",
              }}
              className="group relative p-10 bg-white rounded-radius-container border border-gray-100 transition-all duration-300 cursor-default"
            >
              {/* Glow overlay effect */}
              <div className="absolute inset-0 rounded-radius-container border border-transparent group-hover:border-secondary/30 transition-all duration-300 pointer-events-none" />

              {/* Icon container */}
              <div className="w-16 h-16 rounded-radius-button bg-secondary/10 group-hover:bg-secondary flex items-center justify-center mb-8 transition-colors duration-300">
                {ind.icon}
              </div>

              {/* Title */}
              <h3 className="font-manrope text-xl font-bold text-primary mb-4">
                {ind.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-sm text-gray-600 leading-relaxed">
                {ind.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
