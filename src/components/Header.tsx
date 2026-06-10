"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
  onInquiryClick: () => void;
}

export default function Header({ onContactClick, onInquiryClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Products", href: "#products" },
    { label: "Industries", href: "#industries" },
    { label: "Manufacturing", href: "#manufacturing" },
    { label: "Innovation", href: "#innovation" },
    { label: "About", href: "#about" },
    { label: "CSR", href: "#csr" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-4 border-b border-gray-100"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px] flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span
            className={`font-manrope font-extrabold text-xl md:text-2xl tracking-tight transition-colors ${
              isScrolled ? "text-secondary" : "text-white"
            }`}
          >
            TERMINAL <span className="font-light">TECHNOLOGIES</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-inter text-sm font-semibold tracking-wide hover:text-secondary transition-colors ${
                isScrolled ? "text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onInquiryClick}
            className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-radius-button border transition-all duration-300 ${
              isScrolled
                ? "border-secondary text-secondary hover:bg-secondary hover:text-white"
                : "border-white/50 text-white hover:bg-white hover:text-primary"
            }`}
          >
            Inquiry
          </button>
          <button
            onClick={onContactClick}
            className="px-5 py-2 text-xs md:text-sm font-semibold rounded-radius-button bg-secondary text-white hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-[1px]"
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden p-2 rounded-md hover:bg-black/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-primary" : "text-white"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-primary" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[60px] bg-primary z-40 flex flex-col p-6 animate-fade-in overflow-y-auto">
          <div className="flex flex-col gap-5 mb-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-manrope text-lg font-semibold text-white/95 hover:text-secondary py-2 border-b border-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onInquiryClick();
              }}
              className="w-full py-3 border border-white/50 text-white font-semibold rounded-radius-button hover:bg-white/10 transition-all text-center"
            >
              Inquiry
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-3 bg-secondary text-white font-semibold rounded-radius-button hover:bg-white hover:text-primary transition-all text-center shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
