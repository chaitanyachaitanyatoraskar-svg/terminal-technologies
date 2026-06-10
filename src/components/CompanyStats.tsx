"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

export default function CompanyStats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const stats: StatItem[] = [
    { target: 1993, suffix: "", label: "Founded" },
    { target: 1000, suffix: "+", label: "Employees" },
    { target: 500, suffix: "+", label: "Customers" },
    { target: 2, suffix: " Billion+", label: "Connections" },
    { target: 7, suffix: " Million+", label: "Daily Production" },
    { target: 30, suffix: "+", label: "Years Excellence" },
  ];

  return (
    <section
      ref={containerRef}
      className="py-[120px] bg-primary relative overflow-hidden text-white"
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[-10%] w-[35vw] h-[35vh] bg-secondary/10 rounded-full blur-[110px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vh] bg-accent/5 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-[80px]">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-inter text-sm font-semibold tracking-widest text-secondary-fixed-dim uppercase mb-3 block">
            Milestones & Scale
          </span>
          <h2 className="font-manrope text-3xl md:text-5xl font-bold mb-4">
            Our Scale in Numbers
          </h2>
          <p className="font-inter text-white/60 text-base">
            Powering major industries worldwide with high-precision high-volume manufacturing capabilities.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-dark p-8 rounded-radius-container flex flex-col items-center justify-center text-center border border-white/10 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1"
            >
              <h3 className="font-manrope text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed-dim via-white to-secondary-fixed-dim mb-3">
                {isInView ? (
                  <Counter
                    target={stat.target}
                    duration={2}
                    suffix={stat.suffix}
                  />
                ) : (
                  "0" + stat.suffix
                )}
              </h3>
              <p className="font-inter text-sm md:text-base font-semibold text-white/75 group-hover:text-white transition-colors uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple Count-up Counter Component
function Counter({
  target,
  duration = 2,
  suffix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) {
      setCount(end);
      return;
    }

    // Special case for years like 1993, we might want to start from 1950 or count up from 0.
    // For 2 or 7, it's very fast, so we can support floating points or standard integers.
    const startVal = end > 1000 ? 1900 : 0;
    let current = startVal;
    const totalIterations = 60;
    const stepTime = (duration * 1000) / totalIterations;
    const increment = (end - startVal) / totalIterations;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
