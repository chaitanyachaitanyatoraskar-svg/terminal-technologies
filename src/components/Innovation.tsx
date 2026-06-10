"use client";

import { motion } from "framer-motion";
import { Hammer, Zap, Settings, Milestone, ShieldAlert, Cpu } from "lucide-react";

export default function Innovation() {
  const cards = [
    {
      icon: <Hammer size={24} className="text-secondary" />,
      title: "Precision Tooling",
      description: "Advanced progressive die design and in-house manufacturing maintaining tolerances down to micron levels.",
    },
    {
      icon: <Zap size={24} className="text-secondary" />,
      title: "High-Speed Stamping",
      description: "Automated tooling machinery executing complex bends and cuts at hundreds of strokes per minute.",
    },
    {
      icon: <Settings size={24} className="text-secondary" />,
      title: "Automation",
      description: "Industry 4.0 robot integrations, automatic visual feedback loops, and self-sorting conveyor grids.",
    },
    {
      icon: <Milestone size={24} className="text-secondary" />,
      title: "Product Development",
      description: "FEA modeling, mechanical stress evaluations, and proprietary metal alloy configurations.",
    },
    {
      icon: <ShieldAlert size={24} className="text-secondary" />,
      title: "Testing",
      description: "Advanced validation labs measuring salt spray resistance, heat aging, and insertion cycle thresholds.",
    },
    {
      icon: <Cpu size={24} className="text-secondary" />,
      title: "Smart Manufacturing",
      description: "Enterprise IoT digitizing the factory floor with real-time OEE dashboards and automated raw stock feeds.",
    },
  ];

  return (
    <section id="innovation" className="py-[120px] bg-background-custom overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px]">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-inter text-sm font-semibold tracking-widest text-secondary uppercase mb-3 block">
            Technical Leadership
          </span>
          <h2 className="font-manrope text-3xl md:text-5xl font-bold text-primary mb-4">
            Innovation Driven Manufacturing
          </h2>
          <p className="font-inter text-gray-600 text-base">
            Pioneering smart engineering methods to deliver high-yield electrical terminals for global OEMs.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.05)" }}
              className="p-8 bg-white rounded-radius-container border border-gray-100 flex flex-col justify-between transition-all duration-300 cursor-default"
            >
              <div>
                <div className="w-12 h-12 rounded-radius-button bg-background-custom flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="font-manrope text-lg font-bold text-primary mb-3">
                  {card.title}
                </h3>
              </div>
              <p className="font-inter text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
