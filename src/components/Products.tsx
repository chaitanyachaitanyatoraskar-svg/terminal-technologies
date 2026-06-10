"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProductItem {
  id: string;
  title: string;
  category: string;
  image: string;
  subItems: string[];
  description: string;
}

export default function Products() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Products" },
    { id: "terminals", label: "Terminals" },
    { id: "connectors", label: "Connectors" },
    { id: "distribution", label: "Distribution Systems" },
    { id: "custom", label: "Custom & Specialty" },
  ];

  const products: ProductItem[] = [
    {
      id: "terminals",
      title: "High-Precision Terminals",
      category: "terminals",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiTDeO4Gmvm0ViTXuXLIj3JwZfkXYoAsUav35u09Dz51HO-onJ79cWaMWqXqu7tYf8-vY4dWlt3uUllZeWlhzYmawL_Joqyn0eFYR83a8mr5405cCqScj1OYlcuqVwLDQaBOdJC5g3CmZjpwqAYsMrqVoBMz28kCkCOQZbvowEnJOHFd3MAI-Epblx7kUvJPKRZ75nTMufGHvSNWdHnj725dafjok2f5dvXUw2Auc49C2w_0oX7YEUYr6SbDVtbgJrsSXIk-t0lOo",
      description: "Automotive-grade high-conductivity stamped terminals engineered to withstand vibration, stress, and corrosion.",
      subItems: [
        "Ring Terminals",
        "Fork Terminals",
        "Fuse Terminals",
        "Battery Terminals",
        "Bullet Terminals",
      ],
    },
    {
      id: "connectors",
      title: "Precision Connectors",
      category: "connectors",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYMSWP2y8XRdRBhf0llppDIv-ID5dWfao0vTabtrDfc7K1KlZMvzguqh0lQVhoirbhlGBojV1yjxL7yV2rC3AdmnV0coOKo3T8nFh7jX5Mo09kUDJo9tuzVmIrckcpoNAOgsECSqIivlS5u7O1mFdKLnwXNsaa4ehM9BzfxPDaa4jpu_ZgzjVW4qKXAl9_MhJpMKGti2A9iT3kAY6N4-Gmn8EuZ6J5xM4yIDY-OmdocO9NDuNzxTXLHLnhkJa4GmdF0g6y25LwClo",
      description: "Robust terminal housings and multi-pin connector sockets with locked seals for automotive sensor hubs.",
      subItems: [
        "Male Connectors",
        "Female Connectors",
        "Sensor Connectors",
        "Automotive Connectors",
        "Head Lamp Connectors",
      ],
    },
    {
      id: "distribution",
      title: "Power Distribution Modules",
      category: "distribution",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmQ0gYPU3iAztmnhpldX0iVXD2enZ5NxHtTfYCbrAf4wBhx8ytsSUIK_aH6w9nQjpT_Vo0kPoPkOvFA6FWrEuDG-rgfP92yqa8YzoORlIuuheR5t9A40pANHZs5pZOgWgUD0JQiXhA3Jisrlq1s69v9Jp7zQU_CyGjfkJILPJGxHdQIJkC6qnjmpGPKe4fMlyc2ahFnTp-LMWD9-wt1DprkhXI9Hic6okXeZrdx1lJEAUTygQAvMZjwqHLJBmBlQcFYmga9tBkuAs",
      description: "Compact distribution panels, relay mounting tracks, and copper bus systems for complex automotive electronics.",
      subItems: [
        "Fuse Boxes",
        "Power Distribution Systems",
        "Relay Bases",
        "Copper Bus Bars",
      ],
    },
    {
      id: "custom",
      title: "Specialty & Custom Parts",
      category: "custom",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABKyTioJEU9IT8KUCtePAUv7bdBekwlBOZ6ATyp8LX2BYcRdMJxrH3fc7UFnz95PGNTTc3ykFkX_DTkMgH59cbnhY_DwJ5mxQR1LL6lZxgd-ecGjqD7p9MuDrOqxwEJ9VQjSgHmm7LSiUy6qej5jad43RPPAjQjFul54bb657s-bnB2DywoIFpgpS2m_MeUkBrwjL2r-npldiP9TDfANOcVIdXuWCJjWvWwoGsAs1Dk25QIgcsJQd7ea8EJ23gPtUvkpu_B8u5zFA",
      description: "Corrugated wire covers, custom hybrid polymer assemblies, and bespoke stampings designed to print.",
      subItems: [
        "Corrugated Tubes",
        "Plastic Connectors",
        "Custom Components",
      ],
    },
  ];

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="py-[120px] bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px]">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div>
            <span className="font-inter text-sm font-semibold tracking-widest text-secondary uppercase mb-3 block">
              Product Portfolio
            </span>
            <h2 className="font-manrope text-3xl md:text-5xl font-bold text-primary">
              Precision Engineered Components
            </h2>
          </div>
          <div className="font-inter text-sm text-gray-600 max-w-md">
            Complete range of high-conductivity terminals, durable automotive connector systems, and custom tooling solutions.
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-6 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-radius-button font-manrope text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-secondary text-white shadow-md shadow-secondary/20"
                  : "bg-background-custom text-primary hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-radius-container overflow-hidden aspect-[4/3] min-h-[350px] shadow-lg border border-gray-100 cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Initial overlay (Semi-transparent dark at bottom) */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                {/* Hover overlay (Solid dark blue gradient with rich glassmorphism details) */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/90 to-primary/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10" />

                {/* Normal State Text */}
                <div className="absolute bottom-8 left-8 right-8 z-10 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="font-manrope text-2xl font-bold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="font-inter text-xs font-semibold text-secondary-fixed-dim uppercase tracking-wider">
                    {product.category === "terminals" ? "High-Speed Stamping" : "Modular Assembly"}
                  </p>
                </div>

                {/* Hover State Detail Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-manrope text-2xl font-bold text-white mb-3">
                    {product.title}
                  </h3>
                  <p className="font-inter text-sm text-white/75 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Dynamic sub product list */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.subItems.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold font-inter text-white bg-white/10 rounded-full border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-secondary-fixed-dim font-manrope font-semibold text-sm hover:text-white transition-colors duration-300">
                    Learn More
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
