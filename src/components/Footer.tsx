import { Phone, Clock, MapPin } from 'lucide-react';

const PHONE = '0423 017 489';
const PHONE_HREF = 'tel:0423017489';
const EMAIL = 'info@metrowideplumbing.com.au';

const services = ['Residential Plumbing', 'Commercial Plumbing', 'Maintenance Plumbing', 'New Builds', 'Renovations', 'Emergency Plumbing'];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* CTA strip */}
      <div className="cyan-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-heading font-extrabold text-2xl text-white">Ready to get started?</h3>
            <p className="text-white/85 text-sm">Fast, reliable plumbing across all areas. Call us now for a free quote.</p>
          </div>
          <a href={PHONE_HREF} className="inline-flex items-center gap-2.5 bg-brand-black hover:bg-black text-white font-bold px-8 py-4 rounded transition-colors uppercase tracking-wide text-sm">
            <Phone size={18} fill="currentColor" /> Call {PHONE}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="Metrowide Plumbing" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              Reliable, high-quality plumbing solutions for residential, commercial, renovation, new build and maintenance projects. Licensed and insured.
            </p>
            <div className="flex gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-white/70 bg-white/5 px-3 py-1.5 rounded">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Available Now
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-5 text-white uppercase tracking-wide">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s}><a href="#services" className="text-white/65 hover:text-brand-cyan transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-brand-cyan group-hover:w-2 transition-all" /> {s}
                </a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-5 text-white uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="text-white/65 hover:text-brand-cyan transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-5 text-white uppercase tracking-wide">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand-cyan mt-0.5 flex-shrink-0" fill="currentColor" />
                <div><a href={PHONE_HREF} className="text-white hover:text-brand-cyan transition-colors block">{PHONE}</a><span className="text-white/45 text-xs">Tap to call</span></div>
              </li>
              <li className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-cyan mt-0.5 flex-shrink-0" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
                <div><a href={`mailto:${EMAIL}`} className="text-white hover:text-brand-cyan transition-colors block">{EMAIL}</a><span className="text-white/45 text-xs">Email us</span></div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                <div><span className="text-white block">Servicing All Areas</span><span className="text-white/45 text-xs">We come to you</span></div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                <div><span className="text-white block">Mon - Fri: 7am - 5pm</span><span className="text-white/45 text-xs">Same-day service available</span></div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Metrowide Plumbing. All rights reserved.</p>
          <p>Website by <a href="https://www.itscold.com.au" target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline font-semibold">Go Polar</a></p>
        </div>
      </div>
    </footer>
  );
}
