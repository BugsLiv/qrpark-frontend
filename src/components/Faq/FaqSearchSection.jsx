// import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export function FaqSearchSection() {
    // const [query, setQuery] = useState('');
   
    return (
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #ddeeff 0%, #eaf4ff 50%, #f0f7ff 100%)',
          minHeight: '220px',
        }}
      >
        {/* Decorative cityscape blobs */}
        <div
          className="absolute bottom-0 left-0 w-48 h-32 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at bottom left, #b8d4f0 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-0 right-0 w-64 h-40 opacity-10"
          style={{
            background:
              'radial-gradient(ellipse at top right, #93c5fd 0%, transparent 70%)',
          }}
        />
   
        {/* Building silhouettes (SVG inline) */}
        <svg
          className="absolute bottom-0 left-4 opacity-15"
          width="160"
          height="80"
          viewBox="0 0 160 80"
          fill="#1a3a6b"
        >
          <rect x="0" y="40" width="20" height="40" />
          <rect x="25" y="20" width="30" height="60" />
          <rect x="60" y="30" width="25" height="50" />
          <rect x="90" y="10" width="40" height="70" />
          <rect x="135" y="35" width="25" height="45" />
        </svg>
   
        {/* Character illustration (SVG placeholder matching screenshot) */}
        <div className="absolute right-8 bottom-0 flex items-end gap-3">
          {/* Question mark bubble */}
          <div className="mb-10 w-12 h-12 rounded-full bg-[#1a3a6b] flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">?</span>
          </div>
          {/* Person SVG */}
          <svg width="90" height="130" viewBox="0 0 90 130" fill="none" className="mb-0">
            {/* Body */}
            <rect x="22" y="55" width="46" height="55" rx="8" fill="#29a8e0" />
            {/* Head */}
            <circle cx="45" cy="38" r="20" fill="#f5c5a0" />
            {/* Hair */}
            <ellipse cx="45" cy="20" rx="20" ry="10" fill="#2d2d2d" />
            {/* Arm holding phone */}
            <rect x="58" y="70" width="12" height="30" rx="6" fill="#f5c5a0" />
            {/* Phone */}
            <rect x="60" y="80" width="20" height="32" rx="4" fill="#1a3a6b" />
            <rect x="62" y="83" width="16" height="26" rx="2" fill="#60a5fa" />
            {/* Legs */}
            <rect x="26" y="106" width="16" height="24" rx="6" fill="#1a3a6b" />
            <rect x="48" y="106" width="16" height="24" rx="6" fill="#1a3a6b" />
            {/* Logo on shirt */}
            <circle cx="35" cy="75" r="5" fill="#1a3a6b" opacity="0.6" />
          </svg>
        </div>
   
        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center pt-10 pb-8 px-6">
          <h1 className="text-3xl font-extrabold text-primary text-center mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
   
          {/* Search bar */}
          <div className="w-full max-w-xl relative">
            <FaSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"
              size={18}
            />
            <input
              type="text"
              placeholder="Search questions..."
            //   value={query}
            //   onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3.5 rounded-full bg-white shadow-md text-slate-600 text-sm placeholder:text-slate-400 outline-none border border-[#d6e8f8] focus:ring-2 focus:ring-[#29a8e0]/30"
            />
          </div>
        </div>
      </section>
    );
  }