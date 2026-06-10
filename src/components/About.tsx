"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AboutProps {
  onLearnMoreClick: () => void;
}

export default function About({ onLearnMoreClick }: AboutProps) {
  const stats = [
    { value: "30+", label: "Years Experience" },
    { value: "1000+", label: "Employees" },
    { value: "2 Billion+", label: "Connections Annually" },
    { value: "7 Million+", label: "Daily Production Capacity" },
  ];

  return (
    <section id="about" className="py-[120px] bg-background-custom overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px] grid grid-cols-12 gap-10 items-center">
        
        {/* Left Side: Industrial R&D / Collaboration Image */}
        <div className="col-span-12 lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-radius-container overflow-hidden aspect-[4/3] shadow-2xl relative group border border-gray-200"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABKyTioJEU9IT8KUCtePAUv7bdBekwlBOZ6ATyp8LX2BYcRdMJxrH3fc7UFnz95PGNTTc3ykFkX_DTkMgH59cbnhY_DwJ5mxQR1LL6lZxgd-ecGjqD7p9MuDrOqxwEJ9VQjSgHmm7LSiUy6qej5jad43RPPAjQjFul54bb657s-bnB2DywoIFpgpS2m_MeUkBrwjL2r-npldiP9TDfANOcVIdXuWCJjWvWwoGsAs1Dk25QIgcsJQd7ea8EJ23gPtUvkpu_B8u5zFA"
              alt="Engineering R&D Team CAD Discussion"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Soft decorative shadow and accent */}
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>

          {/* Floating Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -bottom-8 -right-4 glass-card p-6 rounded-radius-container shadow-xl hidden sm:block border-l-4 border-secondary max-w-[200px]"
          >
            <h5 className="text-secondary font-manrope text-3xl font-extrabold leading-none mb-1">
              30+
            </h5>
            <p className="text-primary font-inter text-xs font-bold uppercase tracking-wider">
              Years of Manufacturing Excellence
            </p>
          </motion.div>
        </div>

        {/* Right Side: Narrative & Stats */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Eyebrow */}
            <span className="font-inter text-sm font-semibold tracking-widest text-secondary uppercase mb-3 block">
              Global Standard Connectivity
            </span>
            
            {/* Title */}
            <h2 className="font-manrope text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Engineering Connections Since 1993
            </h2>

            {/* Content */}
            <p className="font-inter text-base text-gray-700 leading-relaxed mb-8">
              Terminal Technologies (I) Pvt. Ltd. was founded in 1993 by Mr. C.A.
              Anto and Mr. Sanjay Negandhi. From a three-person operation, the
              company has grown into a leading manufacturer of terminals,
              connectors and interconnection solutions with over 1000 employees
              and global manufacturing capabilities.
            </p>

            {/* Grid Highlight Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="border-l-2 border-gray-200 pl-4">
                  <h4 className="font-manrope text-2xl font-bold text-secondary">
                    {stat.value}
                  </h4>
                  <p className="font-inter text-xs text-gray-600 font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button
              onClick={onLearnMoreClick}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-manrope font-semibold rounded-radius-button transition-all duration-300 group hover:scale-[1.02]"
            >
              Learn More
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
