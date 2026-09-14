function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-900">
      <div className="content-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-block bg-white rounded p-2 mb-4">
              <img
                src="/logo.png"
                alt="Sharentals Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </a>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Straightforward and dependable vehicle rentals throughout Sydney and NSW. Operating from Auburn with direct WhatsApp customer service.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-brand-orange transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-orange transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#promotions" className="hover:text-brand-orange transition-colors">
                  Vehicle Promotions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Auburn, NSW 2144, Australia</li>
              <li>
                <a href="tel:+61452572702" className="hover:text-brand-orange transition-colors">
                  +61 452 572 702
                </a>
              </li>
              <li>
                <a href="mailto:info@sharentals.com.au" className="hover:text-brand-orange transition-colors">
                  info@sharentals.com.au
                </a>
              </li>
            </ul>
          </div>

          {/* Social & WhatsApp */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4">
              Connect
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <a
                  href="https://wa.me/61452572702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange-hover font-semibold transition-colors"
                >
                  WhatsApp &rarr;
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/sharentals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sharentals. All rights reserved.</p>
          <p>Auburn, New South Wales, Australia.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
