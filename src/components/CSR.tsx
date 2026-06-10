"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, Heart, ShieldPlus, Home } from "lucide-react";

export default function CSR() {
  const cards = [
    {
      icon: <BookOpen size={24} className="text-secondary" />,
      title: "Rural Education",
      desc: "Establishing computer labs, donating study materials, and rebuilding classrooms in remote rural communities.",
    },
    {
      icon: <Award size={24} className="text-secondary" />,
      title: "Skill Development",
      desc: "Free vocational tool training, tooling apprenticeships, and electronic assembly certifications for young adults.",
    },
    {
      icon: <Heart size={24} className="text-secondary" />,
      title: "Medical Support",
      desc: "Deploying Mobile Medical Vans, funding regional healthcare clinics, and hosting free diagnostics checkups.",
    },
    {
      icon: <ShieldPlus size={24} className="text-secondary" />,
      title: "Hunger Management",
      desc: "Supporting food banks, daily lunch distribution programs, and child nutrition initiatives in nearby settlements.",
    },
    {
      icon: <Home size={24} className="text-secondary" />,
      title: "Community Development",
      desc: "Providing clean drinking water filter grids, public lighting systems, and rural support programs.",
    },
  ];

  return (
    <section id="csr" className="py-[120px] bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px]">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-inter text-sm font-semibold tracking-widest text-secondary uppercase mb-3 block">
            Social Responsibility
          </span>
          <h2 className="font-manrope text-3xl md:text-5xl font-bold text-primary mb-4">
            Connecting @ Heart
          </h2>
          <p className="font-inter text-gray-600 text-base">
            Empowering communities, driving skill acquisition, and providing critical medical mobility and rural support programs.
          </p>
        </div>

        {/* 5 Card Grid with Centered Final Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 bg-background-custom rounded-radius-container border border-gray-100 flex flex-col hover:border-secondary/30 transition-all duration-300 group cursor-default shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-radius-button bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                {card.icon}
              </div>
              <h4 className="font-manrope text-base font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                {card.title}
              </h4>
              <p className="font-inter text-xs text-gray-600 leading-relaxed mt-auto">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
