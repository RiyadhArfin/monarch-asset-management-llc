import React from 'react';
import { 
  Scissors, 
  Trees, 
  Wind, 
  Layers, 
  SunMedium, 
  Building2, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Precision Turf Mowing & Edging',
    description: 'Scheduled residential and commercial lawn mowing, string-trimming around borders, razor-sharp sidewalk edging, and clean blow-off of all hardscapes.',
    features: ['Even blade height control', 'Razor-sharp walkway edging', 'Clipping bagging or mulching', 'Weekly & bi-weekly schedule'],
    image: '/images/lawn_mowing.jpg'
  },
  {
    icon: Trees,
    title: 'California Native & Drought-Smart Planting',
    description: 'Custom landscape design utilizing California native flora, succulent beds, ornamental grasses, and decorative river rocks that thrive in Sacramento climate.',
    features: ['Drought-tolerant plant layout', 'Sacramento microclimate selection', 'Soil enrichment & root food', 'Weed barrier installation'],
    image: '/images/landscape_planting.jpg'
  },
  {
    icon: Layers,
    title: 'Organic Bark Mulching & Bed Care',
    description: 'Deep trench border edging and fresh shredded cedar or dark bark mulch application to retain ground moisture, suppress weeds, and enrich root systems.',
    features: ['Dark shredded bark & natural mulch', 'Deep perimeter trench edging', 'Pre-emergent weed suppression', 'Moisture retention protection'],
    image: '/images/mulch_bed.jpg'
  },
  {
    icon: Wind,
    title: 'Seasonal Property Overhauls & Cleanups',
    description: 'Comprehensive seasonal cleanouts. Power leaf vacuuming and blowing, perennial pruning, thatch removal, and pre-summer / post-fall yard revitalization.',
    features: ['Complete leaf & branch cleanup', 'Lawn dethatching & aeration', 'Brush & debris haul away', 'Seasonal preparation'],
    image: '/images/seasonal_cleanup.jpg'
  },
  {
    icon: SunMedium,
    title: 'Hedge, Palm & Shrub Pruning',
    description: 'Artistic sculpting and horticultural trimming of California privacy hedges, ornamental bushes, and small palm trees to encourage lush, healthy growth.',
    features: ['Geometric & topiary trimming', 'Dead branch removal', 'Wild sucker elimination', 'Aesthetic perimeter shaping'],
    image: '/images/hedge_trimming.jpg'
  },
  {
    icon: Building2,
    title: 'Commercial & HOA Grounds Care',
    description: 'Full-service contract groundskeeping for Sacramento business centers, corporate complexes, multi-family communities, and HOA residential parks.',
    features: ['Sacramento code compliance', 'Rapid dispatch maintenance crews', 'High-traffic curb appeal', 'Itemized commercial billing'],
    image: '/images/commercial_grounds.jpg'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white bg-pattern-grid-monarch relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-monarch-100 text-monarch-900 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-sunburst-600" />
            Sacramento Landscaping Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Complete Grounds Preservation & Landscape Care
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We specialize exclusively in high-quality landscaping. Our Sacramento crews deploy commercial equipment, precision techniques, and sustainable California practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-soft shadow-hover flex flex-col group"
              >
                {/* Image header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-monarch-950/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-monarch-950 text-sunburst-400 group-hover:bg-sunburst-500 group-hover:text-white flex items-center justify-center shadow-md transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-monarch-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-monarch-700 group-hover:text-sunburst-600 transition-colors"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 rounded-3xl bg-monarch-950 text-white p-8 sm:p-10 relative overflow-hidden shadow-xl border border-monarch-900">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Need a Custom Grounds Maintenance Plan in Sacramento?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Whether you manage commercial portfolios or single-family estates across Sacramento and Northern California, Monarch Asset Management delivers reliable scheduling and instant quotes.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sunburst-500 to-sunburst-600 hover:from-sunburst-600 hover:to-sunburst-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm transition-colors shadow-md shadow-orange-500/20"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          {/* Decorative background shape */}
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-sunburst-500/10 rounded-full blur-2xl pointer-events-none -mr-20 -mb-20" />
        </div>

      </div>
    </section>
  );
}
