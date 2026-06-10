"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Quality() {
  const metrics = [
    { value: "99.9%", label: "Quality Performance", sub: "Annual OEM acceptance rate" },
    { value: "0.5 PPM", label: "Defect Rate", sub: "Automotive-standard validation limits" },
  ];

  const features = [
    { title: "Continuous Improvement", desc: "Kaizen and Six Sigma methodologies implemented across all staging lines." },
    { title: "Process Excellence", desc: "Automated SPC monitoring of stamping tool wear and injection pressures." },
    { title: "Customer Satisfaction", desc: "Strategic response cycles ensuring quick turnaround for global partners." },
    { title: "Product Reliability", desc: "Rigorous thermal shock, contact resistance, and mating force labs." },
    { title: "Global Standards", desc: "Complying with ROHS, REACH, and custom regional environmental rules." },
    { title: "Automotive Quality Systems", desc: "Full certification under IATF 16949:2016 management standards." },
  ];

  return (
    <section className="py-[120px] bg-primary relative overflow-hidden text-white">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vh] bg-secondary/15 rounded-full blur-[110px]" />
        <div className="absolute top-[-10%] right-[-10%] w-[35vw] h-[35vh] bg-accent/5 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-[80px] grid grid-cols-12 gap-12">
        {/* Left Side: Quality Statistics Panel */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-inter text-sm font-semibold tracking-widest text-secondary-fixed-dim uppercase mb-3 block">
              Zero-Defect Goal
            </span>
            <h2 className="font-manrope text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Manufacturing Quality Without Compromise
            </h2>
            <p className="font-inter text-white/70 text-base mb-10 leading-relaxed">
              Our quality assurance protocols conform strictly to IATF 16949 standards. Through continuous monitoring and automated machine-vision sorters, we guarantee consistent electrical conductivity and mechanical fit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="glass-dark p-6 rounded-radius-container border border-white/15">
                  <h3 className="font-manrope text-4xl font-extrabold text-secondary-fixed-dim mb-2">
                    {metric.value}
                  </h3>
                  <p className="font-inter text-sm font-bold uppercase tracking-wider mb-1">
                    {metric.label}
                  </p>
                  <p className="font-inter text-xs text-white/50">
                    {metric.sub}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Features Checkmarks Grid */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle2 size={24} className="text-secondary-fixed-dim shrink-0 mt-1" />
                <div>
                  <h4 className="font-manrope text-lg font-bold mb-2">
                    {feature.title}
                  </h4>
                  <p className="font-inter text-sm text-white/60 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
