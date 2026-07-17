import { Home, Building2, Wrench, Hammer, ShowerHead, Droplets, ArrowRight, Phone } from 'lucide-react';

const PHONE = '0423 017 489';
const PHONE_HREF = 'tel:0423017489';

const services = [
  {
    icon: Home,
    title: 'Residential Plumbing',
    desc: 'From dripping taps to full pipe replacements, we keep your home flowing smoothly. No job is too small.',
    points: ['Tap & fixture repairs', 'Hot water systems', 'Pipe relining & replacement', 'Gas fitting'],
  },
  {
    icon: Building2,
    title: 'Commercial Plumbing',
    desc: 'Reliable plumbing for offices, retail and industrial premises with minimal disruption to your operations.',
    points: ['Commercial fit-outs', 'Maintenance contracts', 'Backflow prevention', 'Trade waste systems'],
  },
  {
    icon: Wrench,
    title: 'Maintenance Plumbing',
    desc: 'Ongoing maintenance and rapid repairs that prevent small issues from becoming costly emergencies.',
    points: ['Leak detection & repair', 'Drain cleaning', 'Roof & gutter checks', 'Preventative servicing'],
  },
  {
    icon: Hammer,
    title: 'New Builds',
    desc: 'Complete plumbing installations for new homes and developments, done right the first time, on budget.',
    points: ['Rough-in & fit-off', 'Water & sewer connections', 'Gas installations', 'Compliance certificates'],
  },
  {
    icon: ShowerHead,
    title: 'Renovations',
    desc: 'Bathroom, kitchen and laundry renovations with premium workmanship and attention to every detail.',
    points: ['Bathroom makeovers', 'Kitchen plumbing', 'Laundry refits', 'Fixture upgrades'],
  },
  {
    icon: Droplets,
    title: 'Emergency Plumbing',
    desc: 'Burst pipes, blockages and leaks handled fast. We respond quickly to minimise damage to your property.',
    points: ['Burst pipe repair', 'Blocked drains', 'Gas leaks', 'Hot water breakdowns'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="section-label">What We Do</span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-brand-black leading-tight mb-3">
              Complete Plumbing Services<br />For Every Project
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-600 leading-relaxed">
              From small repairs to full installations, our experienced team handles every aspect of your plumbing with quality workmanship and honest advice. We work with homeowners, builders and developers across all areas.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, points }) => (
            <div key={title} className="service-card-hover bg-white rounded-xl p-7 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 cyan-bar transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-300" />
              <div className="w-14 h-14 rounded-lg bg-brand-black flex items-center justify-center mb-5 group-hover:bg-brand-cyan transition-colors">
                <Icon size={26} className="text-brand-cyan group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-black mb-2.5">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{desc}</p>
              <ul className="space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-brand-gray-mid">
                    <span className="w-1.5 h-1.5 rounded-full cyan-bar flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="mt-12 bg-brand-black rounded-xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-extrabold text-2xl text-white mb-1">Need a plumber today?</h3>
            <p className="text-white/70 text-sm">Fast, reliable service across all areas. Same-day callouts available.</p>
          </div>
          <a href={PHONE_HREF} className="btn-primary flex-shrink-0 text-base px-8 py-4">
            <Phone size={18} fill="currentColor" /> Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
