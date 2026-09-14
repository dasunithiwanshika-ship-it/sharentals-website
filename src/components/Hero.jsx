function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-white">
      <div className="content-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Brand Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Brand Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
                Sharentals Australia
              </span>
            </div>

            {/* Core Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-brand-navy leading-[1.12]">
              Vehicle Rental <br />
              <span className="text-brand-orange">Made Simple.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Straightforward and dependable vehicle rentals operating from Auburn, NSW. Choose your date, tell us your vehicle requirements, and connect directly with us on WhatsApp.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#inquire"
                className="inline-flex items-center justify-center gap-2.5 rounded-md bg-brand-orange px-7 py-3.5 text-base font-bold text-white shadow-xs transition-colors hover:bg-brand-orange-hover"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Inquire on WhatsApp
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-navy hover:border-slate-400"
              >
                How It Works
              </a>
            </div>

            {/* Value Indicators */}
            <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-3 gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Hub</p>
                <p className="text-sm font-bold text-brand-navy mt-0.5">Auburn, NSW</p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Response</p>
                <p className="text-sm font-bold text-brand-navy mt-0.5">Instant WhatsApp</p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Booking</p>
                <p className="text-sm font-bold text-brand-navy mt-0.5">Direct & Simple</p>
              </div>
            </div>

          </div>

          {/* Right: High-Impact Automotive Imagery */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=85"
                alt="Sharentals Fleet Vehicle"
                className="h-[300px] sm:h-[400px] lg:h-[460px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Premium Fleet</p>
                  <p className="text-sm font-semibold text-white mt-0.5">Clean, Maintained & Road-Ready</p>
                </div>
                <a
                  href="#promotions"
                  className="inline-flex items-center text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded text-white hover:bg-brand-orange transition-colors"
                >
                  View Promotions &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;