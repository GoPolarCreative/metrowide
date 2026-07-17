import { PhoneCall, ClipboardList, Wrench, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: PhoneCall, n: '01', title: 'Get In Touch', desc: 'Call us or send through a message. Tell us what you need and we will respond fast.' },
  { icon: ClipboardList, n: '02', title: 'Free Quote', desc: 'We assess the job and provide a clear, accurate quote with no obligation.' },
  { icon: Wrench, n: '03', title: 'We Get To Work', desc: 'Our licensed plumbers complete the job to the highest standard, on time.' },
  { icon: CheckCircle2, n: '04', title: 'Job Done', desc: 'We tidy up, walk you through the work, and leave you with peace of mind.' },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-white font-semibold uppercase tracking-[0.15em] text-xs mb-3">
            <span className="w-6 h-0.5 bg-white rounded" /> How We Work
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight">
            Simple Process, Quality Results
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map(({ icon: Icon, n, title, desc }, i) => (
            <div key={n} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[55%] w-[80%] h-0.5 bg-white/30" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-5">
                <Icon size={30} className="text-brand-cyan" />
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-brand-black text-white text-xs font-bold flex items-center justify-center">{n}</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">{title}</h3>
              <p className="text-white/85 text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
