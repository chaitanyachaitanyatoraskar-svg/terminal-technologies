"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Link,
  Zap,
  Layers,
  Sparkles,
  Layout,
  Cpu,
  Compass,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function CoreCapabilities() {
  const capabilities = [
    {
      icon: <Wrench size={28} className="text-secondary" />,
      title: "Precision Metal Stamping",
      description:
        "High-speed progression tooling stamping copper, brass, and steel down to 0.1mm thickness with micron precision.",
    },
    {
      icon: <Link size={28} className="text-secondary" />,
      title: "Connector Manufacturing",
      description:
        "Assembly of multi-pin, locked, and sealed polymer terminal shells for mission-critical automotive wiring systems.",
    },
    {
      icon: <Zap size={28} className="text-secondary" />,
      title: "Terminal Manufacturing",
      description:
        "High-conductivity quick-connect terminal tabs, receptacles, and splices stamped in high volumes.",
    },
    {
      icon: <Layers size={28} className="text-secondary" />,
      title: "Injection Molding",
      description:
        "Thermoplastic injection molding of high-grade engineering polymers with custom-designed hot runner molds.",
    },
    {
      icon: <Sparkles size={28} className="text-secondary" />,
      title: "Selective Plating",
      description:
        "Continuous reel-to-reel electroplating of tin, nickel, silver, and gold with micron-level thickness control.",
    },
    {
      icon: <Layout size={28} className="text-secondary" />,
      title: "Tool Design",
      description:
        "Proprietary 3D CAD modeling and stress analysis of complex multi-stage progressive stamping dies.",
    },
    {
      icon: <Cpu size={28} className="text-secondary" />,
      title: "Automation Solutions",
      description:
        "In-house development of customized high-speed component assembly machines and automated testing fixtures.",
    },
    {
      icon: <Compass size={28} className="text-secondary" />,
      title: "Product Engineering",
      description:
        "Co-development with global Tier-1 automotive partners to optimize component conductivity and fatigue limits.",
    },
    {
      icon: <Truck size={28} className="text-secondary" />,
      title: "Supply Chain Management",
      description:
        "Global logistical framework serving OEMs in Europe, North America, and Asia with real-time tracking.",
    },
    {
      icon: <ShieldCheck size={28} className="text-secondary" />,
      title: "Quality Assurance",
      description:
        "IATF 16949 compliant system with real-time automated vision inspection and statistical process controls.",
    },
  ];

  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px]">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="font-inter text-sm font-semibold tracking-widest text-secondary uppercase mb-3 block">
            Core Capabilities
          </span>
          <h2 className="font-manrope text-3xl md:text-5xl font-bold text-primary mb-4">
            Industrial Engineering Excellence
          </h2>
          <p className="font-inter text-gray-600 text-base">
            Providing modular, robust, and highly integrated production systems to meet the most demanding specifications.
          </p>
        </div>

        {/* 10 Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -5, borderColor: "#0050CC" }}
              className="p-6 bg-background-custom rounded-radius-container border border-gray-100 flex flex-col justify-between transition-all duration-300 cursor-default min-h-[250px]"
            >
              <div>
                <div className="w-12 h-12 rounded-radius-button bg-white flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                  {cap.icon}
                </div>
                <h4 className="font-manrope text-base font-bold text-primary mb-3">
                  {cap.title}
                </h4>
              </div>
              <p className="font-inter text-xs text-gray-600 leading-relaxed mt-auto">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
