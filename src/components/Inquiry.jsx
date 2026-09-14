import { useState } from "react";

function Inquiry() {
  const [date, setDate] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = date ? date : "To be confirmed";
    const formattedReq = requirements.trim() ? requirements.trim() : "General rental inquiry";

    const text = `Hi Sharentals! I would like to inquire about a vehicle rental.\n\n• Rental Date: ${formattedDate}\n• Vehicle Requirements: ${formattedReq}\n\nPlease let me know your vehicle availability and rates.`;
    const url = `https://wa.me/61452572702?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="inquire" className="py-16 sm:py-24 lg:py-28 bg-brand-navy text-white relative">
      <div className="content-container">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              Direct Inquiry
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-tight">
            Ready to plan your rental?
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Tell us your preferred date and vehicle specifications. We will respond directly to you on WhatsApp.
          </p>
        </div>

        {/* Clean Form Card */}
        <div className="max-w-xl mx-auto bg-slate-900/90 border border-slate-800 rounded-xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Rental Date */}
            <div>
              <label htmlFor="rental-date-input" className="block text-sm font-bold text-slate-200 mb-2">
                Rental Date <span className="text-brand-orange">*</span>
              </label>
              <input
                id="rental-date-input"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-3.5 text-base text-white placeholder-slate-500 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors [color-scheme:dark]"
              />
            </div>

            {/* Vehicle Requirements */}
            <div>
              <label htmlFor="vehicle-req-input" className="block text-sm font-bold text-slate-200 mb-2">
                Vehicle Requirements <span className="text-brand-orange">*</span>
              </label>
              <textarea
                id="vehicle-req-input"
                rows="4"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Example: Looking for an 8-seater SUV or sedan for a 4-day weekend trip..."
                required
                className="w-full resize-none rounded-md border border-slate-700 bg-slate-950 px-4 py-3.5 text-base text-white placeholder-slate-500 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors"
              />
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2.5 rounded-md bg-brand-orange py-4 px-6 text-base sm:text-lg font-bold text-white shadow-md transition-colors hover:bg-brand-orange-hover"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Inquire on WhatsApp
              </button>
            </div>

            <p className="text-center text-xs text-slate-400">
              Direct connection with our Auburn team. No online payment or account creation required.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Inquiry;