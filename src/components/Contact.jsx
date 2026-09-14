function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="content-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Heading & Intro */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                Get in Touch
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy leading-tight">
              Let&apos;s talk about your next vehicle rental.
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Have questions regarding vehicle suitability, rental duration, or special requests? Reach out directly and our Auburn team will assist you immediately.
            </p>

            <div className="mt-6">
              <a
                href="https://wa.me/61452572702"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-brand-orange-hover transition-colors"
              >
                Message on WhatsApp &rarr;
              </a>
            </div>
          </div>

          {/* Right: Contact Information Grid */}
          <div className="lg:col-span-7 bg-surface rounded-xl border border-slate-200 p-6 sm:p-8 divide-y divide-slate-200">
            
            {/* Location */}
            <div className="pb-5 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand-navy text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</p>
                <p className="mt-0.5 text-base font-bold text-brand-navy">Auburn, NSW 2144, Australia</p>
              </div>
            </div>

            {/* Phone */}
            <div className="py-5 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand-navy text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</p>
                <a href="tel:+61452572702" className="mt-0.5 block text-base font-bold text-brand-navy hover:text-brand-orange transition-colors">
                  +61 452 572 702
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="py-5 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand-navy text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</p>
                <a href="mailto:info@sharentals.com.au" className="mt-0.5 block text-base font-bold text-brand-navy hover:text-brand-orange transition-colors">
                  info@sharentals.com.au
                </a>
              </div>
            </div>

            {/* WhatsApp & Facebook */}
            <div className="pt-5 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand-orange text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Social & Chat</p>
                <div className="mt-0.5 flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/61452572702"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-brand-orange hover:text-brand-orange-hover transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href="https://www.facebook.com/sharentals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-slate-700 hover:text-brand-navy transition-colors"
                  >
                    Facebook Page
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
