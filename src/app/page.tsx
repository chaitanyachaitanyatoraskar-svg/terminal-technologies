"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CompanyStats from "@/components/CompanyStats";
import IndustriesServed from "@/components/IndustriesServed";
import Products from "@/components/Products";
import ManufacturingExcellence from "@/components/ManufacturingExcellence";
import CoreCapabilities from "@/components/CoreCapabilities";
import Innovation from "@/components/Innovation";
import Quality from "@/components/Quality";
import CSR from "@/components/CSR";
import WhyChoose from "@/components/WhyChoose";
import GlobalPresence from "@/components/GlobalPresence";
import Clients from "@/components/Clients";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-background-custom selection:bg-secondary selection:text-white">
      {/* Navigation Header */}
      <Header
        onContactClick={() => scrollToSection("contact")}
        onInquiryClick={() => scrollToSection("contact")}
      />

      {/* Main Sections */}
      <main className="w-full">
        {/* Cinematic Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection("products")}
          onContactClick={() => scrollToSection("contact")}
        />

        {/* OEM Partner Logo Marquee Slider */}
        <Clients />

        {/* Narrative & History Section */}
        <About onLearnMoreClick={() => scrollToSection("manufacturing")} />

        {/* Counter Milestones Stats */}
        <CompanyStats />

        {/* Industries Served Section */}
        <IndustriesServed />

        {/* Products Showcase Grid */}
        <Products />

        {/* 11-step Manufacturing Excellence Ecosystem */}
        <ManufacturingExcellence />

        {/* Core Capabilities Technical Specifications */}
        <CoreCapabilities />

        {/* R&D and Innovation Driven Manufacturing */}
        <Innovation />

        {/* Quality Controls Section */}
        <Quality />

        {/* Corporate Social Responsibility Section */}
        <CSR />

        {/* Bullet Differentiators Section */}
        <WhyChoose />

        {/* Location Markers Interactive Map */}
        <GlobalPresence />

        {/* Talent & Careers CTA Banner */}
        <Careers onCareersClick={() => scrollToSection("contact")} />

        {/* Contact Submission Form & Headquarters Details */}
        <Contact />
      </main>

      {/* Footer Navigation Columns */}
      <Footer />
    </div>
  );
}
