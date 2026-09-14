function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 bg-white">
      <div className="content-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Editorial Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=85"
                alt="Sharentals reliable vehicle fleet"
                className="h-[320px] sm:h-[400px] lg:h-[460px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6">
                <div className="inline-block rounded bg-white/95 px-3.5 py-1.5 text-xs font-bold text-brand-navy shadow-xs backdrop-blur-xs">
                  Auburn, NSW Hub • Servicing Greater Sydney
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                About Sharentals
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-brand-navy leading-[1.15]">
              Straightforward vehicle rental with a personal touch.
            </h2>

            <div className="mt-6 space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                At Sharentals, we believe securing a quality rental vehicle should be clear, reliable, and completely free of confusing booking engines, hidden charges, or impersonal automated systems.
              </p>
              <p>
                From our dedicated base in Auburn, NSW, we provide dependable vehicles for family vacations, business engagements, and group trips. You simply share your preferred dates and vehicle needs with us, and we handle the rest directly via WhatsApp.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-brand-navy hover:text-brand-orange transition-colors"
              >
                View Our Services &rarr;
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="#inquire"
                className="text-sm sm:text-base font-semibold text-slate-600 hover:text-brand-orange transition-colors"
              >
                Send Direct Inquiry
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;