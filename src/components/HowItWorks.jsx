function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Choose Your Date",
      description: "Select the date or timeframe you need the vehicle for your travel plans.",
    },
    {
      step: "02",
      title: "Tell Us What You Need",
      description: "Describe the vehicle type, seating capacity, or any specific requirements.",
    },
    {
      step: "03",
      title: "Inquire on WhatsApp",
      description: "Send your inquiry straight to Sharentals on WhatsApp for immediate personal assistance.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="content-container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              Customer Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy">
            How It Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Three simple steps between you and your next vehicle rental.
          </p>
        </div>

        {/* Desktop Progression */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          
          {/* Connector Line */}
          <div className="absolute top-6 left-[18%] right-[18%] h-[2px] bg-slate-200 z-0" />

          {steps.map((item) => (
            <div key={item.step} className="relative z-10 flex flex-col items-center text-center">
              
              {/* Step Circle */}
              <div className="flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-brand-navy text-white font-extrabold text-lg lg:text-xl border-4 border-white shadow-xs mb-6">
                {item.step}
              </div>

              <h3 className="text-lg lg:text-xl font-bold uppercase tracking-wide text-brand-navy mb-2.5">
                {item.title}
              </h3>

              <p className="text-sm lg:text-base text-slate-600 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden space-y-8 relative pl-6 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-slate-200">
          {steps.map((item) => (
            <div key={item.step} className="relative pl-6">
              <div className="absolute -left-6 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy text-white text-xs font-bold border-2 border-white shadow-xs">
                {item.step}
              </div>

              <h3 className="text-base font-bold uppercase tracking-wide text-brand-navy mb-1">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-14 sm:mt-16 text-center">
          <a
            href="#inquire"
            className="inline-flex items-center justify-center rounded-md bg-brand-orange px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-xs hover:bg-brand-orange-hover transition-colors"
          >
            Start Your Inquiry &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
