"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function WhyChoose() {
  const bulletPoints = [
    "30+ Years Experience",
    "2 Billion Connections Annually",
    "1000+ Workforce",
    "Complete In-House Manufacturing",
    "Engineering Expertise",
    "Custom Product Development",
    "Global Standards",
    "Trusted OEM Supplier",
    "High Volume Production",
    "Strong R&D Capability",
  ];

  return (
    <section className="py-[120px] bg-background-custom overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px] grid grid-cols-12 gap-10 items-center">
        
        {/* Left: Branding Image */}
        <div className="col-span-12 lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-radius-container overflow-hidden aspect-[4/3] shadow-xl border border-gray-200 group"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgLpMNIxVtQiKu1bykSw4bKT5bNzad_kT2iobSdJn9huij0Z6qAQT-LkABrCVomQVvYNmvyydbrzcalU58R4Ye2qhuZPwnVdhy-YnD0o4hSwiYATWJnx2ygIxd_98MFWQDrsWCDPXjScnNpWS6s3chccIhRGYlRMnEYedH1yiQ3kI0QS1Cba8KyWNSdnYp5g5bzZucuQtLz_-R8baY5m-KGFiUShn3KbjL2FX_QAe8eEFnIy6tZrgRQD_v6fu3o4ZRhAXu0oOH5_8"
              alt="Terminal Technologies Industrial Night View"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
          </motion.div>
        </div>

        {/* Right: Bullet Points */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-inter text-sm font-semibold tracking-widest text-secondary uppercase mb-3 block">
              Why Choose Us
            </span>
            <h2 className="font-manrope text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Leading the Industry with Precision
            </h2>
            <p className="font-inter text-gray-600 text-base mb-8 leading-relaxed">
              We leverage vertical integration, specialized materials engineering, and automation to deliver global mobility components.
            </p>

            {/* Bullets List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bulletPoints.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-secondary" />
                  </div>
                  <span className="font-inter text-sm font-semibold text-primary/80">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
