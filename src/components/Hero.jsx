import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MapPin, Leaf, Award, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white bg-pattern-grid-monarch pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-100">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-monarch-100/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sunburst-100/40 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-monarch-50 border border-monarch-200/90 text-monarch-950 text-xs sm:text-sm font-bold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-sunburst-500 animate-pulse"></span>
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span>Dedicated Landscaping & Grounds Preservation • Sacramento, CA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Elevating Properties with <span className="bg-gradient-to-r from-monarch-600 to-sunburst-600 bg-clip-text text-transparent">Pristine Landscaping</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              <strong>MONARCH ASSET MANAGEMENT</strong> provides dedicated, high-standard residential and commercial landscaping throughout Sacramento, CA & Northern California. Trusted for speed, drought-smart design, and meticulous grounds care.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                'Sacramento & Greater Area Fast Dispatch',
                'Precision Mowing & Sharp Edging',
                'California Native & Drought-Smart Flora',
                'Full Asset Manager & Owner Compliance'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sunburst-500 to-sunburst-600 hover:from-sunburst-600 hover:to-sunburst-700 text-white px-7 py-4 rounded-xl font-black text-base shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:9165189580"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-7 py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-sm"
              >
                <Phone className="w-5 h-5 text-monarch-600" />
                <span>Call (916) 518-9580</span>
              </a>
            </div>

            {/* Quick Contact snippet */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500 border-t border-slate-200/80">
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-sunburst-600" />
                3400 Cottage Way, Suite G2, Sacramento, CA 95825
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Licensed & Insured California Contractor
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/images/hero_landscape.jpg"
                  alt="California Landscaping & Grounds Preservation in Sacramento by Monarch Asset Management"
                  className="w-full h-[440px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-monarch-950/85 via-transparent to-transparent" />

                {/* Bottom card content */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-monarch-950/90 backdrop-blur-sm text-xs font-bold text-sunburst-400 border border-monarch-800">
                    <Sparkles className="w-3.5 h-3.5 text-sunburst-400" />
                    <span>Sacramento Grounds Excellence</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">Precision Turf & California Landscape Care</h3>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Custom grounds preservation, drought-adapted planting, and clean mulch beds crafted for Northern California climate.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-sunburst-50 flex items-center justify-center text-sunburst-600 font-black text-sm">
                  100%
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Quality & Reliability</div>
                  <div className="text-[11px] text-slate-500">Sacramento Asset Care</div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-monarch-100 flex items-center justify-center text-monarch-700 font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Greater Sacramento Area</div>
                  <div className="text-[11px] text-slate-500">Quick Local Dispatch</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
