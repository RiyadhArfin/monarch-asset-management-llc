import React from 'react';
import { MapPin, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

const regions = [
  {
    name: 'Sacramento (Central & Downtown)',
    neighborhoods: 'Downtown, Midtown, East Sacramento, Land Park, Curtis Park',
    time: 'Fast Same-Day / Next-Day Dispatch'
  },
  {
    name: 'Arden-Arcade & Carmichael',
    neighborhoods: 'Cottage Way Corridor, Sierra Oaks, Arden Park, Carmichael Estates',
    time: 'Headquarters Immediate Coverage'
  },
  {
    name: 'Roseville & Rocklin',
    neighborhoods: 'West Roseville, Olympus Pointe, Stanford Ranch, Whitney Ranch',
    time: 'Daily Commercial & HOA Route'
  },
  {
    name: 'Folsom & El Dorado Hills',
    neighborhoods: 'Empire Ranch, Broadstone, Historic Folsom, Serrano Communities',
    time: 'Scheduled Recurring Service'
  },
  {
    name: 'Elk Grove & Laguna',
    neighborhoods: 'Laguna West, Sheldon, East Elk Grove, Camden Park',
    time: 'High-Volume Residential & Commercial'
  },
  {
    name: 'Rancho Cordova & Citrus Heights',
    neighborhoods: 'Anatolia, Sunriver, Greenback Corridor, Sunrise Market',
    time: 'Fast Mobile Crew Route'
  }
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-monarch-100 text-monarch-900 text-xs font-bold tracking-wider uppercase">
              California Service Coverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Proudly Serving Sacramento & Greater Northern California
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Based at <strong>3400 Cottage Way, Suite G2, Sacramento, CA</strong>, Monarch Asset Management operates fleet crews deployed daily across Sacramento County, Placer County, and surrounding areas.
            </p>

            <div className="p-5 rounded-2xl bg-monarch-950 text-white space-y-3">
              <div className="flex items-center gap-2.5 text-sunburst-400 font-bold text-sm">
                <MapPin className="w-4 h-4" />
                <span>Sacramento Headquarters</span>
              </div>
              <p className="text-xs text-slate-300">
                3400 Cottage Way, Suite G2, Sacramento, CA 95825
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-monarch-800 text-xs text-slate-300">
                <span>Direct Line:</span>
                <a href="tel:9165189580" className="text-sunburst-400 font-black hover:text-white transition-colors">
                  (916) 518-9580
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full compliance documentation for Sacramento asset managers & HOAs.</span>
            </div>
          </div>

          {/* Right Region Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((region, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:border-monarch-300 transition-colors space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sunburst-600 shrink-0" />
                    <span>{region.name}</span>
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {region.neighborhoods}
                </p>
                <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-bold text-monarch-700">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>{region.time}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
