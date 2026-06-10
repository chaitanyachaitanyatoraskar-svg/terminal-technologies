"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Building, Shield, ExternalLink } from "lucide-react";

interface LocationItem {
  id: string;
  name: string;
  type: string;
  desc: string;
  address: string;
  mapUrl: string;
  externalLink: string;
  details: string[];
}

export default function GlobalPresence() {
  const [selectedLoc, setSelectedLoc] = useState<string>("vasai");

  const locations: LocationItem[] = [
    {
      id: "vasai",
      name: "Vasai (Headquarters)",
      type: "Global Headquarters & R&D",
      desc: "Administrative core, research & development center, and precision prototyping tooling labs.",
      address: "Terminal House, Building 3, Merchant Industrial Complex, Waliv, Vasai East, Maharashtra, India.",
      mapUrl: "https://maps.google.com/maps?q=Terminal%20Technologies%20(I)%20Pvt.%20Ltd.%20Waliv%20Vasai&t=&z=14&ie=UTF8&iwloc=&output=embed",
      externalLink: "https://maps.google.com/?q=Terminal+Technologies+Vasai+Waliv",
      details: ["R&D & Design Center", "Corporate Offices", "Precision Tooling Division", "150+ Design Projects/yr"],
    },
    {
      id: "pune",
      name: "Pune",
      type: "Automotive Manufacturing Plant",
      desc: "High-speed stamping operations, polymer molding injection, and large-scale assembly hubs.",
      address: "Terminal Technologies, Pune Region, Maharashtra, India.",
      mapUrl: "https://maps.google.com/maps?q=Terminal%20Technologies%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed",
      externalLink: "https://maps.google.com/?q=Terminal+Technologies+Pune",
      details: ["Automated Press Lines", "Secondary Assembly", "Plating Operations", "Automotive Wiring Hub"],
    },
    {
      id: "bhilad",
      name: "Bhilad",
      type: "High-Volume Production Facility",
      desc: "High-capacity component stamping, secondary processes, and local distribution pipelines.",
      address: "Terminal Technologies, Bhilad, Gujarat, India.",
      mapUrl: "https://maps.google.com/maps?q=Terminal%20Technologies%20Bhilad&t=&z=13&ie=UTF8&iwloc=&output=embed",
      externalLink: "https://maps.google.com/?q=Terminal+Technologies+Bhilad",
      details: ["Automated Terminal Production", "Specialized Component Plating", "Logistics Hub", "High-Volume Dispatch"],
    },
  ];

  const activeLoc = locations.find((l) => l.id === selectedLoc) || locations[0];

  return (
    <section className="py-[120px] bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px]">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-inter text-sm font-semibold tracking-widest text-secondary uppercase mb-3 block">
            Presence & Reach
          </span>
          <h2 className="font-manrope text-3xl md:text-5xl font-bold text-primary mb-4">
            Industrial Infrastructure
          </h2>
          <p className="font-inter text-gray-600 text-base">
            Operating specialized manufacturing hubs and high-performance production facilities across strategic locations.
          </p>
        </div>

        {/* Interactive Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Location Selector & Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLoc(loc.id)}
                  className={`w-full text-left p-6 rounded-radius-container border transition-all duration-300 cursor-pointer ${
                    selectedLoc === loc.id
                      ? "border-secondary bg-secondary/5 shadow-md"
                      : "border-gray-100 bg-background-custom hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <MapPin className={selectedLoc === loc.id ? "text-secondary" : "text-gray-400"} size={20} />
                      <h4 className="font-manrope text-lg font-bold text-primary">
                        {loc.name}
                      </h4>
                    </div>
                    {selectedLoc === loc.id && (
                      <a 
                        href={loc.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-primary transition-colors p-1"
                        title="Open in Google Maps"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <span className="font-inter text-xs font-semibold text-secondary uppercase tracking-wider block mb-2">
                    {loc.type}
                  </span>
                  <p className="font-inter text-xs text-gray-500 leading-relaxed mb-3">
                    {loc.desc}
                  </p>
                  <p className="font-inter text-[11px] text-gray-400 italic">
                    {loc.address}
                  </p>
                </button>
              ))}
            </div>

            {/* Selected Location Feature Highlights */}
            <div className="mt-8 p-6 bg-background-custom rounded-radius-container border border-gray-100">
              <h5 className="font-manrope text-sm font-bold text-primary mb-4 uppercase tracking-wider">
                Capabilities at this site
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeLoc.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-inter font-semibold text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map Iframe Panel showing Selected Location live map */}
          <div className="lg:col-span-7 bg-gray-100 rounded-radius-container overflow-hidden min-h-[480px] relative border border-gray-200 shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLoc}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full"
              >
                <iframe
                  src={activeLoc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter grayscale-[10%] brightness-[98%] contrast-[102%]"
                  title={`Google Maps showing ${activeLoc.name}`}
                ></iframe>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
