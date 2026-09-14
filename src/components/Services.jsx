function Services() {
  const serviceItems = [
    {
      num: "01",
      title: "Vehicle Rentals",
      description: "Well-maintained, clean, and road-inspected passenger and utility vehicles suited for private, family, and corporate travel.",
    },
    {
      num: "02",
      title: "Flexible Rental Options",
      description: "Adaptable rental terms configured around your specific dates, whether you need transport for a weekend trip or an extended period.",
    },
    {
      num: "03",
      title: "Direct Customer Support",
      description: "Direct personal assistance via WhatsApp with our Auburn team to discuss vehicle requirements, pricing, and handover arrangements.",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-surface border-t border-slate-200">
      <div className="content-container">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy">
            Clear, dependable rental services.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Everything you need for a stress-free vehicle hire experience in New South Wales.
          </p>
        </div>

        {/* Minimalist Editorial Numbered Rows */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {serviceItems.map((service) => (
            <div
              key={service.num}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start hover:bg-white/60 transition-colors px-2 sm:px-4 rounded"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-orange tracking-tight">
                  {service.num}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;