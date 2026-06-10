"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Cpu,
  Hammer,
  Layers,
  CheckSquare,
  Wrench,
  Sparkles,
  Workflow,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

export default function ManufacturingExcellence() {
  const steps = [
    {
      num: 1,
      title: "Product Design",
      icon: <Compass size={24} className="text-secondary" />,
      desc: "Co-engineering with OEMs to optimize electrical performance and material efficiency.",
    },
    {
      num: 2,
      title: "Tool Design",
      icon: <Cpu size={24} className="text-secondary" />,
      desc: "3D CAD/CAM structural modeling of high-speed progression stamping dies.",
    },
    {
      num: 3,
      title: "Tool Manufacturing",
      icon: <Hammer size={24} className="text-secondary" />,
      desc: "Micron-level CNC tooling fabrication and precision grinding.",
    },
    {
      num: 4,
      title: "Prototyping",
      icon: <Layers size={24} className="text-secondary" />,
      desc: "First-run metal samples to confirm shape integrity and tolerances.",
    },
    {
      num: 5,
      title: "Validation",
      icon: <CheckSquare size={24} className="text-secondary" />,
      desc: "Electrical conductivity and mechanical insertion force testing.",
    },
    {
      num: 6,
      title: "Metal Stamping",
      icon: <Wrench size={24} className="text-secondary" />,
      desc: "High-speed precision presses running up to 800 strokes per minute.",
    },
    {
      num: 7,
      title: "Injection Molding",
      icon: <Workflow size={24} className="text-secondary" />,
      desc: "High-cavitation plastic molding of polymer connector shells.",
    },
    {
      num: 8,
      title: "Plating",
      icon: <Sparkles size={24} className="text-secondary" />,
      desc: "Selective reel-to-reel gold, silver, and tin electroplating.",
    },
    {
      num: 9,
      title: "Assembly",
      icon: <Workflow size={24} className="text-secondary" />,
      desc: "Automated high-speed insertion of terminals into connector bases.",
    },
    {
      num: 10,
      title: "Testing",
      icon: <ClipboardCheck size={24} className="text-secondary" />,
      desc: "100% automated optical inspection (AOI) and electrical continuity checks.",
    },
    {
      num: 11,
      title: "Mass Production",
      icon: <TrendingUp size={24} className="text-secondary" />,
      desc: "Global delivery of millions of validated, defect-free connectors.",
    },
  ];

  return (
    <section id="manufacturing" className="py-[120px] bg-background-custom overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px]">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="font-inter text-sm font-semibold tracking-widest text-secondary uppercase mb-3 block">
            End-To-End Integration
          </span>
          <h2 className="font-manrope text-3xl md:text-5xl font-bold text-primary mb-4">
            Complete In-House Manufacturing Ecosystem
          </h2>
          <p className="font-inter text-gray-600 text-base">
            From design to delivery, we control 100% of the lifecycle to maintain strict automotive-grade quality controls.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Connecting Line for desktop (only visible in lg screen) */}
          <div className="hidden lg:block absolute top-[52px] left-[50px] right-[50px] h-[3px] bg-gray-200 z-0" />

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-secondary flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300 z-10 shrink-0">
                  <div className="group-hover:hidden">{step.icon}</div>
                  <div className="hidden group-hover:block text-white font-manrope font-bold">
                    {step.num}
                  </div>
                </div>

                {/* Step Number Indicator */}
                <span className="font-manrope text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                  Step {step.num}
                </span>

                {/* Step Title */}
                <h4 className="font-manrope text-base font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {step.title}
                </h4>

                {/* Step Description */}
                <p className="font-inter text-xs text-gray-500 leading-relaxed max-w-[150px] mx-auto md:max-w-none">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
