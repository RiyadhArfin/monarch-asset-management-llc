import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Clock, Shield, Briefcase, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Turf Mowing & Edging',
    propertyType: 'Residential',
    address: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [mailtoLink, setMailtoLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Landscaping Estimate Request: ${formData.service} - ${formData.name}`);
    const bodyText = 
`Hello Monarch Asset Management Team,

I would like to request an estimate for professional landscaping services in Sacramento, CA & Surrounding Areas.

--- CLIENT & PROPERTY DETAILS ---
• Full Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone || 'N/A'}
• Property Type: ${formData.propertyType}
• Service Needed: ${formData.service}
• Property Address: ${formData.address || 'N/A'}

--- PROJECT DETAILS / SPECIFICATIONS ---
${formData.message || 'No additional notes provided.'}

Best regards,
${formData.name}`;

    const mailto = `mailto:info@monarchassetsmgmt.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    setMailtoLink(mailto);
    setSubmitted(true);

    // Trigger mailto directly
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white bg-pattern-grid-monarch relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-monarch-100 text-monarch-900 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-sunburst-600" />
                Contact & Estimates
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Request Your Free Sacramento Landscaping Quote
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Contact <strong>MONARCH ASSET MANAGEMENT</strong> today. Tell us about your turf care, drought-tolerant planting, or recurring grounds preservation needs across Sacramento.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Phone Line */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-monarch-950 text-sunburst-400 flex items-center justify-center shrink-0 shadow-sm border border-monarch-900">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">Direct Client & Dispatch Line</h4>
                  <a 
                    href="tel:9165189580"
                    className="text-base sm:text-lg font-black text-slate-900 hover:text-monarch-600 transition-colors block mt-0.5"
                  >
                    (916) 518-9580
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Quick estimates, dispatch & commercial quotes</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-monarch-950 text-sunburst-400 flex items-center justify-center shrink-0 shadow-sm border border-monarch-900">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">Official Email Inquiries</h4>
                  <a 
                    href="mailto:info@monarchassetsmgmt.com"
                    className="text-base font-bold text-slate-900 hover:text-monarch-600 transition-colors block mt-0.5"
                  >
                    info@monarchassetsmgmt.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Prompt written quotes within 24 business hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-monarch-950 text-sunburst-400 flex items-center justify-center shrink-0 shadow-sm border border-monarch-900">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">Headquarters & Service Area</h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    3400 Cottage Way, Suite G2, Sacramento, CA 95825
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Serving Sacramento, Roseville, Elk Grove & Northern CA</p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-monarch-50 border border-monarch-200 text-xs text-monarch-950 flex items-center gap-3">
              <Shield className="w-5 h-5 text-monarch-700 shrink-0" />
              <span>
                <strong>MONARCH ASSET MANAGEMENT</strong> is fully licensed and insured for commercial & residential landscaping in California.
              </span>
            </div>

            {/* Support Visual Banner */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative">
              <img 
                src="/images/support-landscaping.jpg" 
                alt="Monarch Client Support" 
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-monarch-950/70 flex items-center px-5 text-white">
                <div>
                  <p className="font-bold text-sm">Need Prompt Grounds Management in Sacramento?</p>
                  <p className="text-xs text-slate-300">Call (916) 518-9580 for immediate dispatch and estimates.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Estimate Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-10 relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-monarch-100 text-monarch-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Estimate Request Generated!</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm">
                    Your email app should open automatically with your inquiry addressed to <strong>info@monarchassetsmgmt.com</strong>.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {mailtoLink && (
                      <a
                        href={mailtoLink}
                        className="px-6 py-2.5 bg-monarch-700 text-white rounded-xl text-sm font-bold hover:bg-monarch-800 transition-colors inline-flex items-center gap-2 shadow-sm"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Open Email Draft Again</span>
                      </a>
                    )}
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: 'Turf Mowing & Edging',
                          propertyType: 'Residential',
                          address: '',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors"
                    >
                      New Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-slate-900">Get a Free Landscaping Estimate</h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Fill out this quick form or email <a href="mailto:info@monarchassetsmgmt.com" className="text-monarch-700 font-bold underline">info@monarchassetsmgmt.com</a>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Michael Vance"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-monarch-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="e.g. michael@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-monarch-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(916) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-monarch-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-monarch-600 focus:border-transparent bg-white"
                      >
                        <option value="Residential">Residential Estate / Home</option>
                        <option value="Commercial">Commercial / Corporate Office</option>
                        <option value="HOA">HOA / Multi-Family Park</option>
                        <option value="Rental">Real Estate Portfolio</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Primary Landscaping Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-monarch-600 focus:border-transparent bg-white"
                    >
                      <option value="Turf Mowing & Edging">Routine Turf Mowing & Precision Edging</option>
                      <option value="California Native Planting">California Native & Drought-Smart Planting</option>
                      <option value="Mulching & Bed Care">Organic Bark Mulching & Deep Bed Edging</option>
                      <option value="Seasonal Cleanup">Seasonal Yard Cleanup & Foliage Removal</option>
                      <option value="Hedge & Palm Pruning">Hedge, Shrub & Palm Tree Sculpting</option>
                      <option value="Commercial Grounds Care">Full Commercial / HOA Grounds Contract</option>
                      <option value="Complete Grounds Overhaul">Complete Property Landscape Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Property Address in Sacramento / Greater Area
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="e.g. 3400 Cottage Way, Sacramento, CA"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-monarch-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Notes / Specific Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Describe lot size, recurring schedule preference, or specific grounds requests..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-monarch-600 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-sunburst-500 to-sunburst-600 hover:from-sunburst-600 hover:to-sunburst-700 text-white font-black rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Send Estimate Request</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
