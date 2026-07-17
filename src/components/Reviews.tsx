import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'James K.', role: 'Homeowner', text: 'Punctual, professional and tidy. Metrowide Plumbing replaced our hot water system the same day we called. Great communication from start to finish. Highly recommend.' },
  { name: 'Sarah M.', role: 'Renovation Client', text: 'Excellent work on our bathroom renovation. The team was friendly, turned up on time every day, and the quality of the workmanship is outstanding.' },
  { name: 'David L.', role: 'Commercial Client', text: 'We use Metrowide for all our commercial maintenance. They are reliable, honest and fairly priced. A trades business that actually does what they say they will.' },
  { name: 'Rebecca T.', role: 'Homeowner', text: 'Called them out for a burst pipe and they were here within the hour. Fast, friendly and fixed the issue properly. My go-to plumber from now on.' },
  { name: 'Michael R.', role: 'Builder', text: 'As a builder, I need trades I can rely on. Metrowide delivers on time, on budget, and to a high standard. They are my first call for plumbing on every project.' },
  { name: 'Lisa H.', role: 'New Build Client', text: 'We built our dream home and Metrowide handled all the plumbing. Professional from quoting to completion. The attention to detail was impressive.' },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="section-label">Testimonials</span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-brand-black leading-tight mb-3">
              What Our Customers Say
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={22} className="fill-brand-cyan text-brand-cyan" />)}
            </div>
            <p className="text-gray-600 text-sm">Trusted by homeowners, builders and businesses across all areas.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(({ name, role, text }) => (
            <div key={name} className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 relative">
              <Quote size={40} className="absolute top-5 right-5 text-brand-cyan/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-brand-cyan text-brand-cyan" />)}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">"{text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-heading font-bold text-sm">{name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-brand-black">{name}</p>
                  <p className="text-xs text-gray-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
