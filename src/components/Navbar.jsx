import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Sacramento Info Bar */}
      <div className="bg-monarch-950 text-slate-200 text-xs py-2 px-4 border-b border-monarch-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-5 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sunburst-400" />
              <span>3400 Cottage Way, Suite G2, Sacramento, CA 95825</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 hidden md:flex">
              <Clock className="w-3.5 h-3.5 text-sunburst-400" />
              <span>Mon - Sat: 7:00 AM - 6:00 PM PST</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="mailto:info@monarchassetsmgmt.com" 
              className="flex items-center gap-1.5 text-slate-300 hover:text-sunburst-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sunburst-400" />
              <span>info@monarchassetsmgmt.com</span>
            </a>
            <span className="hidden sm:inline text-monarch-800">|</span>
            <span className="text-sunburst-400 font-bold tracking-wide hidden sm:inline flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-sunburst-400" />
              Sacramento Landscaping Pros
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white/95 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-md border-b border-slate-100' : 'border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3.5 group">
              <img 
                src="/logo.png" 
                alt="Monarch Asset Management" 
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-black text-lg sm:text-xl text-monarch-950 tracking-tight leading-tight">
                  MONARCH <span className="text-sunburst-600">ASSET MANAGEMENT</span>
                </span>
                <span className="text-[11px] uppercase tracking-widest text-monarch-700 font-bold">
                  Sacramento Landscaping & Grounds
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7 text-sm font-bold text-slate-700">
              <a href="#services" className="hover:text-monarch-600 transition-colors">Services</a>
              <a href="#why-us" className="hover:text-monarch-600 transition-colors">Why Choose Us</a>
              <a href="#process" className="hover:text-monarch-600 transition-colors">Process</a>
              <a href="#showcase" className="hover:text-monarch-600 transition-colors">Showcase</a>
              <a href="#service-area" className="hover:text-monarch-600 transition-colors">Service Area</a>
              <a href="#contact" className="hover:text-monarch-600 transition-colors">Contact</a>
            </div>

            {/* Phone & CTA Button */}
            <div className="hidden sm:flex items-center gap-4">
              <a 
                href="tel:9165189580" 
                className="flex items-center gap-2 text-monarch-950 hover:text-monarch-600 font-extrabold text-sm transition-colors py-2 px-3 rounded-xl hover:bg-slate-50"
              >
                <div className="w-8 h-8 rounded-lg bg-monarch-50 flex items-center justify-center text-monarch-600">
                  <Phone className="w-4 h-4" />
                </div>
                <span>(916) 518-9580</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sunburst-500 to-sunburst-600 hover:from-sunburst-600 hover:to-sunburst-700 text-white font-extrabold text-sm px-5 py-3 rounded-xl shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Free Quote</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:9165189580"
                className="p-2 rounded-xl text-monarch-900 bg-monarch-50"
                aria-label="Call Monarch"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-monarch-600 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2 font-bold text-sm text-slate-800">
              <a 
                href="#services" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Landscaping Services
              </a>
              <a 
                href="#why-us" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Why Choose Monarch
              </a>
              <a 
                href="#process" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Our 4-Step Process
              </a>
              <a 
                href="#showcase" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Project Showcase
              </a>
              <a 
                href="#service-area" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Sacramento Service Area
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Contact & Inquiries
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="tel:9165189580"
                className="w-full py-3 bg-monarch-50 text-monarch-900 font-extrabold rounded-xl flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-monarch-700" />
                <span>Call (916) 518-9580</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 bg-sunburst-500 hover:bg-sunburst-600 text-white font-extrabold rounded-xl text-center shadow-md text-sm"
              >
                Request Free Landscaping Estimate
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
