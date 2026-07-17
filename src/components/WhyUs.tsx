import { Award, Clock, MessageSquare, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    icon: Award,
    title: 'Quality Workmanship',
    desc: 'We take pride in every job, big or small. Our attention to detail and commitment to high standards means plumbing that lasts.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    desc: 'We turn up when we say we will. Successful projects rely on trades who show up on time and keep things moving without delays.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    desc: 'From accurate quoting to keeping you informed at every stage, we make sure you always know what is happening with your job.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Relationships',
    desc: 'We focus on building lasting relationships with homeowners, builders and developers. Our dedication is why clients keep coming back.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-brand-black relative overflow-hidden">
      {/* Decorative diagonal */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cyan/5 transform -skew-x-12 origin-top-right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="section-label">Why Choose Us</span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-3">
              What Sets Metrowide<br />Plumbing Apart
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/65 leading-relaxed">
              Rather than simply completing the plumbing, we focus on delivering a seamless experience from start to finish. Here is what makes us a trusted choice for projects of all sizes.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative group">
              <div className="bg-white/5 border-l-4 border-brand-cyan rounded-r-lg p-7 hover:bg-white/8 transition-colors h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-cyan/15 flex items-center justify-center">
                    <Icon size={24} className="text-brand-cyan" />
                  </div>
                  <span className="font-heading font-extrabold text-3xl text-white/15">0{i + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
