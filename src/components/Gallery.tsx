const images = [
  { src: '/images/2.png', label: 'Quality Workmanship', span: 'lg:row-span-2 lg:col-span-2' },
  { src: '/images/3.png', label: 'Precision Installation', span: '' },
  { src: '/images/4.png', label: 'Commercial Fit-Out', span: '' },
  { src: '/images/5.png', label: 'Renovation Project', span: '' },
  { src: '/images/6.png', label: 'New Build Plumbing', span: '' },
  { src: '/images/7.png', label: 'Maintenance & Repairs', span: 'lg:col-span-2' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="section-label inline-flex">Our Work</span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-3">
            Recent Projects
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A selection of our recent plumbing work across residential and commercial properties, renovations and new builds.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[260px] gap-4">
          {images.map(({ src, label, span }) => (
            <div key={src} className={`gallery-item relative overflow-hidden rounded-xl group cursor-pointer ${span}`}>
              <img src={src} alt={label} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="w-8 h-0.5 cyan-bar block mb-2" />
                <span className="text-white font-heading font-semibold text-base lg:text-lg">{label}</span>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
