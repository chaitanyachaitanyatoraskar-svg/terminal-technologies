"use client";

import { motion } from "framer-motion";
import { Send, Users } from "lucide-react";

interface CareersProps {
  onCareersClick: () => void;
}

export default function Careers({ onCareersClick }: CareersProps) {
  return (
    <section id="careers" className="py-[120px] bg-background-custom overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-primary rounded-radius-container overflow-hidden p-8 md:p-16 lg:p-24 flex flex-col items-center text-center text-white border border-white/10 shadow-2xl"
        >
          {/* Accent lighting highlights */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-20%] left-[-20%] w-[40vw] h-[40vh] bg-secondary/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[40vw] h-[40vh] bg-accent/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary-fixed-dim font-manrope text-xs font-semibold uppercase tracking-wider mb-6">
              <Users size={14} className="mr-2" />
              Join Our Team
            </div>

            {/* Title */}
            <h2 className="font-manrope text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Build The Future Of Connectivity
            </h2>

            {/* Subtext */}
            <p className="font-inter text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mb-10">
              Join a team of engineers, innovators and manufacturing professionals shaping the future of global mobility. If you thrive on precision, automation, and technological leadership, we would love to hear from you.
            </p>

            {/* Action Buttons */}
            <button
              onClick={onCareersClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-white hover:text-primary text-white font-manrope font-semibold rounded-radius-button transition-all duration-300 shadow-lg hover:scale-[1.03] cursor-pointer"
            >
              Explore Careers
              <Send size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
