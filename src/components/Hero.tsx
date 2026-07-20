import { Phone, CheckCircle2, ChevronRight, Send, Shield, Clock, Star, Wrench } from 'lucide-react';
import { useState } from 'react';

const PHONE = '0423 017 489';
const PHONE_HREF = 'tel:0423017489';

const trustBadges = [
  { icon: Shield, label: 'Fully Licensed & Insured' },
  { icon: Clock, label: 'Same Day Service' },
  { icon: Star, label: '15+ Years Experience' },
  { icon: Wrench, label: 'Free Quotes' },
];

interface HeroProps {
  form: { name: string; phone: string; email: string; message: string };
  setForm: (f: { name: string; phone: string; email: string; message: string }) => void;
  status: 'idle' | 'submitting' | 'success' | 'error';
  onSubmit: (e: React.FormEvent) => void;
  setStatus: (s: 'idle' | 'submitting' | 'success' | 'error') => void;
}

export default function Hero({ form, setForm, status, onSubmit, setStatus }: HeroProps) {
  return (
    <section id="home" className="hero-overlay relative min-h-screen flex flex-col justify-center pt-40 pb-8 lg:pt-52 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Left content */}
        <div className="lg:col-span-7 text-white">
          <div className="section-label mb-5">
            <span className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em]">Licensed Plumbers -- All Areas</span>
          </div>

          <h1 className="font-heading font-extrabold text-[2.8rem] sm:text-6xl lg:text-[4.5rem] leading-[1.0] mb-6 text-shadow-sm">
            Expert Plumbing<br />
            Solutions.<br />
            <span className="text-brand-cyan">Done Right.</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
            Metrowide Plumbing delivers reliable, high-quality plumbing for residential homes, commercial properties, renovations and new builds. Fully licensed, fully insured, and ready when you need us.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href={PHONE_HREF} className="btn-primary text-base px-8 py-4">
              <Phone size={18} fill="currentColor" /> Call {PHONE}
            </a>
            <a href="#services" className="btn-outline text-base px-8 py-4">
              View Services <ChevronRight size={18} />
            </a>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {['Free Quotes', 'Same-Day Available', 'No Job Too Small', 'Builders Welcome'].map((f) => (
              <div key={f} className="flex items-center gap-2 text-white/85 text-sm">
                <CheckCircle2 size={16} className="text-brand-cyan flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: contact form */}
        <div className="lg:col-span-5" id="contact">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-brand-black px-6 py-4">
              <p className="font-heading font-extrabold text-xl text-white tracking-wide">GET A FREE QUOTE</p>
              <p className="text-white/60 text-xs mt-0.5">We'll get back to you within the hour</p>
            </div>
            <div className="p-6 sm:p-7">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <p className="font-heading font-bold text-xl text-brand-black mb-2">Message Sent!</p>
                  <p className="text-gray-500 text-sm mb-6">Thanks for reaching out. We'll be in touch shortly.</p>
                  <button onClick={() => setStatus('idle')} className="text-brand-cyan font-semibold hover:underline text-sm">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-gray uppercase tracking-wide mb-1.5">Name *</label>
                      <input required className="form-field" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-gray uppercase tracking-wide mb-1.5">Phone *</label>
                      <input required type="tel" className="form-field" placeholder="Your phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-gray uppercase tracking-wide mb-1.5">Email *</label>
                    <input required type="email" className="form-field" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-gray uppercase tracking-wide mb-1.5">How can we help? *</label>
                    <textarea required rows={4} className="form-field resize-none" placeholder="Describe the job or issue..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark disabled:opacity-60 text-white font-bold py-3.5 rounded transition-colors uppercase tracking-wide text-sm">
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</span>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-600 text-xs text-center bg-red-50 py-2 rounded">
                      Something went wrong. Call us directly on {PHONE}.
                    </p>
                  )}
                  <p className="text-xs text-gray-400 text-center">No obligation. We respond within the hour.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip at the bottom */}
      <div className="w-full mt-16 lg:mt-20">
        <div className="bg-brand-black/70 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 divide-y-0 lg:divide-x lg:divide-white/10">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 justify-center lg:justify-center">
                <div className="w-9 h-9 rounded bg-brand-cyan/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-brand-cyan" />
                </div>
                <span className="text-white font-semibold text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
