import React from 'react';
import { Zap, ShieldCheck, CheckCircle, Clock, Award, Users, PhoneCall } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Rapid Sacramento Dispatch',
    description: 'Fast estimates and reliable deployment. From urgent overgrown lot cutbacks to regular scheduled mowing, our crews mobilize promptly.'
  },
  {
    icon: ShieldCheck,
    title: 'California Code & Water Compliance',
    description: 'We adhere strictly to Sacramento municipal codes, drought standards, and commercial safety guidelines. Fully licensed and insured in CA.'
  },
  {
    icon: Award,
    title: 'Pristine Landscape Craftsmanship',
    description: 'Razor-sharp edging, even turf cuts, thorough weed suppression, and pristine hardscape blow-off on every visit.'
  },
  {
    icon: Clock,
    title: 'Reliable Scheduled Maintenance',
    description: 'Consistent recurring grounds maintenance for commercial properties, HOA communities, and residential estates across Sacramento.'
  },
  {
    icon: Users,
    title: 'Equipped Professional Crew',
    description: 'Experienced groundskeepers equipped with commercial-grade zero-turn mowers, precision edgers, and specialized trimming gear.'
  },
  {
    icon: CheckCircle,
    title: 'Transparent Itemized Billing',
    description: 'Clear upfront pricing with no surprise fees. Dedicated reporting for asset managers, property management teams, and owners.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50 bg-pattern-dots-monarch relative border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-monarch-100 text-monarch-900 text-xs font-bold tracking-wider uppercase">
              Why Monarch Asset Management
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Speed, Compliance, and Exceptional California Grounds Quality
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              At <strong>MONARCH ASSET MANAGEMENT</strong>, we are committed to elevating curb appeal and property value across Sacramento, CA. We deliver dependable, high-standard landscaping with sustainable California practices.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-monarch-50 text-monarch-700 flex items-center justify-center shrink-0 font-black text-lg">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Commercial & Asset Manager Ready</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Equipped to handle high-volume portfolios, HOA parks, and private estates.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sunburst-50 text-sunburst-700 flex items-center justify-center shrink-0 font-black text-lg">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Sacramento Phone Line</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Call (916) 518-9580 or email info@monarchassetsmgmt.com for instant response.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-sunburst-500 to-sunburst-600 hover:from-sunburst-600 hover:to-sunburst-700 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-md shadow-orange-500/20 transition-all"
              >
                Schedule Service in Sacramento
              </a>
            </div>

            {/* Crew Image Callout */}
            <div className="pt-4 overflow-hidden rounded-2xl border border-slate-200 shadow-sm relative group">
              <img 
                src="/images/team-landscaping.jpg" 
                alt="Monarch Asset Management Professional Landscaping Crew" 
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-monarch-950/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs font-semibold text-white">
                  Experienced, insured, and certified landscaping specialists in Sacramento, CA.
                </p>
              </div>
            </div>
          </div>

          {/* Right 2x3 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft shadow-hover space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-monarch-50 text-monarch-700 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
