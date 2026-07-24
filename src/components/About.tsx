import { Award, Users2, MapPin, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Award, n: '15+', l: 'Years Experience' },
  { icon: MapPin, n: 'All', l: 'Areas Covered' },
  { icon: Users2, n: '100%', l: 'Satisfaction' },
  { icon: ThumbsUp, n: 'Free', l: 'Quotes' },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image stack */}
        <div className="relative">
          <img src="/images/4.png" alt="Metrowide Plumbing at work" className="rounded-xl shadow-2xl w-full h-[440px] object-cover" />
          <img src="/images/5.png" alt="Plumbing installation detail" className="absolute -bottom-8 -right-4 sm:-right-6 w-2/5 h-44 object-cover rounded-xl shadow-2xl border-4 border-white hidden sm:block" />
          <div className="absolute -top-6 -left-6 bg-brand-cyan text-white p-5 rounded-xl shadow-xl">
            <p className="font-heading font-extrabold text-4xl leading-none">15+</p>
            <p className="text-xs text-white/85 mt-1 uppercase tracking-wide">Years Experience</p>
          </div>
          <div className="hidden lg:block absolute -bottom-6 -right-6 w-24 h-24 border-4 border-brand-cyan/20 rounded-xl -z-10" />
        </div>

        {/* Content */}
        <div>
          <span className="section-label">About Metrowide Plumbing</span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-brand-black leading-tight mb-5">
            Your Trusted Local Plumbing Team
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            At Metrowide Plumbing, we're committed to delivering reliable, high-quality plumbing solutions with a strong focus on workmanship, communication, and professionalism. With extensive experience across residential construction, renovations, maintenance and new builds, we understand the importance of completing every project efficiently and to the highest standard.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            We work closely with builders, developers, and homeowners to ensure every job is delivered on time, on budget, and with attention to detail. Our reputation is built on honest advice, quality craftsmanship, and dependable service.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Metrowide Plumbing, we believe great service goes beyond the installation. Clear communication, reliability, and respect for our clients and their projects are at the heart of everything we do.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, n, l }) => (
              <div key={l} className="text-center bg-gray-50 rounded-lg p-4 border border-gray-100">
                <Icon size={22} className="mx-auto text-brand-cyan mb-2" />
                <div className="font-heading font-extrabold text-2xl text-brand-black">{n}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
