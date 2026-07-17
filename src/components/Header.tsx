import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Clock } from 'lucide-react';

const PHONE = '0423 017 489';
const PHONE_HREF = 'tel:0423017489';
const EMAIL = 'info@metrowideplumbing.com.au';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top utility bar */}
      <div className="hidden lg:block bg-brand-black border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-2.5">
          <div className="flex items-center gap-6 text-white/65 text-xs">
            <span className="flex items-center gap-1.5"><Clock size={12} className="text-brand-cyan" /> Mon - Fri: 7:00am - 5:00pm</span>
            <span className="flex items-center gap-1.5"><Mail size={12} className="text-brand-cyan" />
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-white/65">Available for same-day service</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse ml-1" />
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-2.5' : 'py-3.5'}`}>
        <a href="#home" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Metrowide Plumbing" className="h-12 sm:h-14 w-auto object-contain" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}
              className="text-brand-black/80 hover:text-brand-cyan font-semibold text-sm uppercase tracking-wider transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-cyan group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={PHONE_HREF} className="flex items-center gap-2.5 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold px-5 py-2.5 rounded transition-colors text-sm uppercase tracking-wide">
            <Phone size={15} fill="currentColor" /> {PHONE}
          </a>
        </div>

        <button className="lg:hidden text-brand-black p-2 rounded" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${menuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="px-4 py-4">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-brand-black/80 hover:text-brand-cyan hover:bg-gray-50 font-semibold py-3 px-3 rounded text-sm uppercase tracking-wider transition-colors border-b border-gray-100 last:border-0">
                {l.label}
              </a>
            ))}
          </nav>
          <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-brand-cyan text-white font-bold px-5 py-3.5 rounded w-full text-sm uppercase tracking-wide">
            <Phone size={16} fill="currentColor" /> Call {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
}
