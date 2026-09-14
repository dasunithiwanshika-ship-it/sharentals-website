import { useState, useEffect } from "react";

function Promotions() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showcaseSlides = [
    {
      id: "01",
      category: "Family & Group Travel",
      headline: "Spacious SUVs & People Movers",
      description: "Ample luggage space, 7 to 8 passenger seating, and supreme comfort for long-distance family holidays and weekend road trips.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=85",
      highlights: ["Up to 8 Passenger Seating", "Generous Luggage Volume", "Automatic Transmission"]
    },
    {
      id: "02",
      category: "Executive & Corporate",
      headline: "Premium Sedans & Highway Cruisers",
      description: "Refined quiet cabin, impressive fuel efficiency, and professional styling ideal for client meetings and airport travel.",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=85",
      highlights: ["Luxury Interior Comfort", "Superior Fuel Economy", "Modern Driver Assistance"]
    },
    {
      id: "03",
      category: "City & Short Trips",
      headline: "Compact & Efficient City Vehicles",
      description: "Effortless urban maneuvering, simple street parking, and low running costs for everyday city errands.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=85",
      highlights: ["Easy Urban Parking", "High Efficiency", "Clean & Road-Inspected"]
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === showcaseSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, showcaseSlides.length]);

  return (
    <section id="promotions" className="py-16 sm:py-24 bg-surface border-y border-slate-200">
      <div className="content-container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                Promotional Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy">
              Vehicle Promotions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Preview our featured vehicle categories. Let us know what you need and we will organize a tailored hire option for you.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-slate-400 mr-2">
              {showcaseSlides[current].id} / 0{showcaseSlides.length}
            </span>
            <button
              onClick={() => setCurrent((prev) => (prev === 0 ? showcaseSlides.length - 1 : prev - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition-colors hover:bg-brand-navy hover:text-white hover:border-brand-navy"
              aria-label="Previous promotional slide"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev === showcaseSlides.length - 1 ? 0 : prev + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition-colors hover:bg-brand-navy hover:text-white hover:border-brand-navy"
              aria-label="Next promotional slide"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Large Showcase Banner Display */}
        <div
          className="relative overflow-hidden rounded-xl bg-slate-900 shadow-xl border border-slate-200"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] w-full">
            {showcaseSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  current === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* Vehicle Image */}
                <img
                  src={slide.image}
                  alt={slide.headline}
                  className="h-full w-full object-cover object-center"
                />

                {/* Dark Editorial Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/50 lg:to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 max-w-2xl text-white">
                  <span className="inline-block self-start rounded bg-brand-orange px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white mb-3">
                    {slide.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    {slide.headline}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-200">
                    {slide.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                    {slide.highlights.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded bg-white/15 backdrop-blur-sm px-3 py-1 text-xs font-medium text-slate-100 border border-white/10"
                      >
                        <svg className="h-3.5 w-3.5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href="#inquire"
                      className="inline-flex items-center gap-2 rounded-md bg-white/20 backdrop-blur-md px-5 py-2.5 text-sm font-bold text-white border border-white/30 hover:bg-brand-orange hover:border-brand-orange transition-colors"
                    >
                      Inquire on WhatsApp &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 right-6 z-20 hidden sm:flex items-center gap-2">
            {showcaseSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === index ? "w-8 bg-brand-orange" : "w-3 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Promotions;