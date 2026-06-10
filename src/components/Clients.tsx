"use client";

import React from "react";

// Inline vector SVG logos for Terminal Technologies' trusted partners/end users
const TataLogo = () => (
  <svg viewBox="0 0 160 50" className="h-10 w-auto text-[#0050CC]" fill="currentColor">
    {/* Arch Emblem */}
    <path d="M22 10C13.2 10 6 17.2 6 26c0 2.6.6 5.1 1.8 7.3l2.6-4.4c-.9-1.9-1.4-3.9-1.4-6.1 0-7 5.7-12.8 12.8-12.8s12.8 5.7 12.8 12.8c0 2.2-.5 4.3-1.4 6.1l2.6 4.4c1.2-2.2 1.8-4.7 1.8-7.3 0-8.8-7.2-16-16-16z" />
    <path d="M22 16.8c-3.4 0-6.2 2.8-6.7 6.2h13.4c-.5-3.4-3.3-6.2-6.7-6.2z" />
    {/* Typo */}
    <text x="50" y="32" fontSize="22" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="3">TATA</text>
  </svg>
);

const PanasonicLogo = () => (
  <svg viewBox="0 0 160 50" className="h-7 w-auto text-[#0F2C59]" fill="currentColor">
    <text x="5" y="32" fontSize="23" fontWeight="bold" fontFamily="'Arial Black', Impact, sans-serif" letterSpacing="-1">Panasonic</text>
  </svg>
);

const PhilipsLogo = () => (
  <svg viewBox="0 0 160 50" className="h-7 w-auto text-[#1F4E79]" fill="currentColor">
    {/* Shield */}
    <path d="M12 10v16c0 6.6 5.4 12 12 12s12-5.4 12-12V10H12zm21 16c0 5-4 9-9 9s-9-4-9-9v-13h18v13z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="18" cy="18" r="1.5" />
    <circle cx="30" cy="18" r="1.5" />
    <path d="M20 28c2 1.5 6 1.5 8 0" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    {/* Typo */}
    <text x="44" y="33" fontSize="21" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="1.5">PHILIPS</text>
  </svg>
);

const BoschLogo = () => (
  <svg viewBox="0 0 160 50" className="h-8 w-auto" fill="currentColor">
    {/* Armature Wheel */}
    <circle cx="20" cy="25" r="13" fill="none" stroke="#E31B23" strokeWidth="3.5" />
    <circle cx="20" cy="25" r="6" fill="none" stroke="#5A5B5C" strokeWidth="2.5" />
    <line x1="20" y1="12" x2="20" y2="38" stroke="#5A5B5C" strokeWidth="2.5" />
    <line x1="7" y1="25" x2="33" y2="25" stroke="#5A5B5C" strokeWidth="2.5" />
    {/* Typo */}
    <text x="45" y="33" fontSize="22" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="1" fill="#1B1B1B">BOSCH</text>
  </svg>
);

const MitsubishiLogo = () => (
  <svg viewBox="0 0 160 50" className="h-8 w-auto text-[#E31B23]" fill="currentColor">
    {/* Three Diamonds */}
    <polygon points="25,9 17,23 33,23" />
    <polygon points="25,37 17,23 25,23" />
    <polygon points="25,37 33,23 25,23" />
    {/* Offset positions to form proper 3-diamonds */}
    <polygon points="25,23 17,37 9,23" className="hidden" /> 
    <g transform="translate(-15,0)">
      <polygon points="40,25 32,39 48,39" />
    </g>
    <g transform="translate(15,0)">
      <polygon points="40,25 32,39 48,39" />
    </g>
    {/* Typo */}
    <text x="75" y="32" fontSize="16" fontWeight="bold" fontFamily="Inter, sans-serif" fill="#1B1B1B">MITSUBISHI</text>
  </svg>
);

const LtLogo = () => (
  <svg viewBox="0 0 160 50" className="h-9 w-auto text-[#0F4C81]" fill="currentColor">
    <rect x="5" y="10" width="30" height="30" fill="#F8C12B" rx="4"/>
    <text x="9" y="32" fontSize="20" fontWeight="900" fontFamily="Inter, sans-serif" fill="#0F4C81">L&T</text>
    <text x="42" y="31" fontSize="16" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="0.5">L&T Group</text>
  </svg>
);

const HitachiLogo = () => (
  <svg viewBox="0 0 160 50" className="h-7 w-auto" fill="currentColor">
    <text x="5" y="32" fontSize="21" fontWeight="bold" fontFamily="Inter, sans-serif" fill="#E31B23" letterSpacing="1">HITACHI</text>
    <text x="100" y="32" fontSize="15" fontWeight="500" fontFamily="Inter, sans-serif" fill="#5A5B5C">Astemo</text>
  </svg>
);

const SuzukiLogo = () => (
  <svg viewBox="0 0 180 50" className="h-8 w-auto" fill="currentColor">
    {/* Stylized Suzuki 'S' */}
    <path d="M12 37l12-16H15l4-6h17L24 31h9l-4 6H12z" fill="#E31B23" />
    {/* Typo */}
    <text x="45" y="26" fontSize="14" fontWeight="900" fontFamily="Inter, sans-serif" fill="#1B1B1B" letterSpacing="0.5">MARUTI</text>
    <text x="45" y="39" fontSize="14" fontWeight="900" fontFamily="Inter, sans-serif" fill="#0050CC" letterSpacing="0.5">SUZUKI</text>
  </svg>
);

const TvsLogo = () => (
  <svg viewBox="0 0 160 50" className="h-8 w-auto" fill="currentColor">
    {/* Charging Horse */}
    <path d="M6 35l14-22 3 5-11 17h12l-10 8 16-16H20z" fill="#E31B23" />
    {/* Typo */}
    <text x="38" y="32" fontSize="24" fontWeight="900" fontFamily="Inter, sans-serif" fill="#0F2C59" fontStyle="italic">TVS</text>
  </svg>
);

const NidecLogo = () => (
  <svg viewBox="0 0 160 50" className="h-7 w-auto text-[#009639]" fill="currentColor">
    <text x="5" y="32" fontSize="24" fontWeight="bold" fontFamily="Inter, sans-serif" letterSpacing="-0.5">Nidec</text>
  </svg>
);

const BajajLogo = () => (
  <svg viewBox="0 0 160 50" className="h-8 w-auto text-[#0050CC]" fill="currentColor">
    {/* Flying V emblem */}
    <path d="M8 25l12-12 12 12-4 4-8-8-8 8-4-4z" />
    <text x="40" y="32" fontSize="21" fontWeight="850" fontFamily="Inter, sans-serif" letterSpacing="1.5">BAJAJ</text>
  </svg>
);

const SchneiderLogo = () => (
  <svg viewBox="0 0 200 50" className="h-7 w-auto text-[#3DCD58]" fill="currentColor">
    {/* Green leaf/accent */}
    <path d="M12 12h12v12H12z" />
    <path d="M18 18h12v12H18z" opacity="0.6" />
    {/* Typo */}
    <text x="38" y="32" fontSize="18" fontWeight="bold" fontFamily="Inter, sans-serif" fill="#1B1B1B" letterSpacing="-0.5">Schneider</text>
  </svg>
);

const OlaLogo = () => (
  <svg viewBox="0 0 160 50" className="h-7 w-auto text-[#1B1B1B]" fill="currentColor">
    <circle cx="18" cy="25" r="10" fill="none" stroke="currentColor" strokeWidth="4.5" />
    <text x="36" y="32" fontSize="20" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="0.5">OLA ELECTRIC</text>
  </svg>
);

const YazakiLogo = () => (
  <svg viewBox="0 0 160 50" className="h-8 w-auto" fill="currentColor">
    <polygon points="5,33 25,12 35,33" fill="#E31B23" />
    <text x="44" y="32" fontSize="21" fontWeight="900" fontFamily="Inter, sans-serif" fill="#1B1B1B" letterSpacing="1.5">YAZAKI</text>
  </svg>
);

const MagnaLogo = () => (
  <svg viewBox="0 0 160 50" className="h-7 w-auto" fill="currentColor">
    <rect x="5" y="14" width="16" height="16" fill="#E31B23" />
    <text x="28" y="32" fontSize="22" fontWeight="bold" fontFamily="Inter, sans-serif" fill="#1B1B1B" letterSpacing="0.5">MAGNA</text>
  </svg>
);

const AptivLogo = () => (
  <svg viewBox="0 0 160 50" className="h-7 w-auto" fill="currentColor">
    <circle cx="16" cy="25" r="7" fill="#FF5C00" />
    <text x="32" y="32" fontSize="23" fontWeight="900" fontFamily="Inter, sans-serif" fill="#1B1B1B" letterSpacing="-0.5">APTIV</text>
  </svg>
);

const HeroLogo = () => (
  <svg viewBox="0 0 160 50" className="h-8 w-auto" fill="currentColor">
    <text x="5" y="33" fontSize="25" fontWeight="900" fontFamily="Inter, sans-serif" fill="#E31B23" fontStyle="italic" letterSpacing="-1">Hero</text>
    <text x="75" y="33" fontSize="13" fontWeight="bold" fontFamily="Inter, sans-serif" fill="#5A5B5C" letterSpacing="2">VIDA</text>
  </svg>
);

const CromptonLogo = () => (
  <svg viewBox="0 0 160 50" className="h-7 w-auto text-[#0F4C81]" fill="currentColor">
    <text x="5" y="32" fontSize="22" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="0.5">Crompton</text>
  </svg>
);

const MarelliLogo = () => (
  <svg viewBox="0 0 180 50" className="h-8 w-auto text-[#0F2C59]" fill="currentColor">
    <text x="5" y="24" fontSize="14" fontWeight="bold" fontFamily="Inter, sans-serif" letterSpacing="1">MAGNETI</text>
    <text x="5" y="39" fontSize="14" fontWeight="bold" fontFamily="Inter, sans-serif" letterSpacing="1">MARELLI</text>
  </svg>
);

export default function Clients() {
  const partners = [
    { component: <TataLogo />, name: "TATA" },
    { component: <PanasonicLogo />, name: "Panasonic" },
    { component: <PhilipsLogo />, name: "Philips" },
    { component: <BoschLogo />, name: "Bosch" },
    { component: <MitsubishiLogo />, name: "Mitsubishi" },
    { component: <LtLogo />, name: "L&T" },
    { component: <HitachiLogo />, name: "Hitachi Astemo" },
    { component: <SuzukiLogo />, name: "Maruti Suzuki" },
    { component: <TvsLogo />, name: "TVS" },
    { component: <NidecLogo />, name: "Nidec" },
    { component: <BajajLogo />, name: "Bajaj" },
    { component: <SchneiderLogo />, name: "Schneider Electric" },
    { component: <OlaLogo />, name: "Ola Electric" },
    { component: <YazakiLogo />, name: "Yazaki" },
    { component: <MagnaLogo />, name: "Magna" },
    { component: <AptivLogo />, name: "Aptiv" },
    { component: <HeroLogo />, name: "Hero MotoCorp" },
    { component: <CromptonLogo />, name: "Crompton" },
    { component: <MarelliLogo />, name: "Magneti Marelli" },
  ];

  // Duplicate the list of logos three times to guarantee a seamless infinitely looping container width
  const sliderItems = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-5 md:px-[80px] mb-8">
        <p className="text-center text-primary/60 font-manrope text-xs font-extrabold uppercase tracking-widest">
          Trusted Partner & End User Portfolio
        </p>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative w-full flex items-center overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-[120px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[120px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="logo-scroll gap-12 py-3">
          {sliderItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[220px] shrink-0 flex justify-center items-center px-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              title={item.name}
            >
              {item.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
