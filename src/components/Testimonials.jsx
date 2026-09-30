import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Monarch transformed the grounds of our 40-unit residential property in Arden-Arcade. Their drought-smart landscaping and regular mowing schedules have significantly elevated tenant satisfaction.",
    author: "David L.",
    role: "Sacramento Regional Asset Manager",
    location: "Sacramento, CA"
  },
  {
    quote: "Exceptional precision on turf edging and mulch bed refresh. They arrived exactly on time, cleared all sidewalks spotless, and provided clear itemized invoices for our HOA board.",
    author: "Elena R.",
    role: "HOA Community Board Member",
    location: "Roseville, CA"
  },
  {
    quote: "Prompt and professional. When we needed a major overgrown lot cleanup and palm trimming before a sale in Folsom, Monarch mobilized within 24 hours.",
    author: "Marcus K.",
    role: "Commercial Real Estate Broker",
    location: "Folsom, CA"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 bg-pattern-dots-monarch relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-monarch-100 text-monarch-900 text-xs font-bold tracking-wider uppercase">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Trusted by Sacramento Property Managers & Owners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-soft flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-sunburst-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-slate-900">{item.author}</div>
                <div className="text-xs text-monarch-700 font-medium">{item.role}</div>
                <div className="text-[11px] text-slate-400">{item.location}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
