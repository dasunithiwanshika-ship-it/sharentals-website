import { useState, useEffect } from "react";
import logoImg from "./assets/logo.png";

function App() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Promotions slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Inquiry form state
  const [rentalDate, setRentalDate] = useState("");
  const [requirements, setRequirements] = useState("");
  const [formError, setFormError] = useState("");

  // Google Reviews interactive state
  const [reviewFilter, setReviewFilter] = useState("all");
  const [helpfulLikes, setHelpfulLikes] = useState({});

  const toggleHelpful = (id) => {
    setHelpfulLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const googleReviews = [
    {
      id: 1,
      name: "Marcus Wong",
      initials: "MW",
      avatarBg: "#1a73e8",
      isLocalGuide: true,
      reviewsCount: "48 reviews",
      rating: 5,
      date: "2 weeks ago",
      category: "family",
      vehicle: "Toyota Estima 8-Seater",
      review:
        "Rented an 8-seater Toyota Estima from Sharentals for a family road trip to the Blue Mountains. The vehicle was spotless inside and out, drove smoothly, and had ample room for luggage and child seats. Handover at Auburn was quick and straightforward, and WhatsApp communication was prompt and helpful. Highly recommend for family travel in Sydney!",
      likes: 12,
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      initials: "SJ",
      avatarBg: "#e37400",
      isLocalGuide: false,
      reviewsCount: "12 reviews",
      rating: 5,
      date: "1 month ago",
      category: "city",
      vehicle: "Mazda 3 Hatchback",
      review:
        "Needed a reliable car for 4 days while mine was in the workshop. The booking process via WhatsApp was refreshingly quick — no long waits or hidden administrative charges. The Mazda 3 was clean, fuel-efficient, and drove like a dream. Security deposit was returned without any delay. Will definitely use Sharentals again!",
      likes: 8,
    },
    {
      id: 3,
      name: "Priya Patel",
      initials: "PP",
      avatarBg: "#0d904f",
      isLocalGuide: true,
      reviewsCount: "31 reviews",
      rating: 5,
      date: "1 month ago",
      category: "corporate",
      vehicle: "Prestige Executive Sedan",
      review:
        "Outstanding service from the Auburn team. Needed an executive sedan on short notice for client meetings across Sydney. The car was spotless, smelled fresh, and drove very quietly. The direct WhatsApp support made extending an extra day completely stress-free. Very professional vehicle rental company.",
      likes: 6,
    },
    {
      id: 4,
      name: "Liam O'Connor",
      initials: "LO",
      avatarBg: "#9334e6",
      isLocalGuide: true,
      reviewsCount: "24 reviews",
      rating: 4,
      date: "2 months ago",
      category: "family",
      vehicle: "Prestige Family SUV",
      review:
        "Great rental experience with Sharentals. Pickup from their Auburn hub was smooth and on time. Car was in top mechanical condition with plenty of luggage space for our regional trip. Fair pricing with transparent terms. Only tip: weekend slots book out fast, so reserve a few days early!",
      likes: 5,
    },
    {
      id: 5,
      name: "Ahmad Al-Mansoor",
      initials: "AA",
      avatarBg: "#ea4335",
      isLocalGuide: false,
      reviewsCount: "8 reviews",
      rating: 5,
      date: "3 months ago",
      category: "rideshare",
      vehicle: "Hybrid Fleet Vehicle",
      review:
        "I’ve been renting a hybrid vehicle from Sharentals for rideshare and delivery work for over 3 months. Their maintenance support is prompt, weekly rates are very competitive, and they understand driver requirements in Sydney. The staff at Auburn are always approachable, honest, and helpful.",
      likes: 15,
    },
    {
      id: 6,
      name: "David Miller",
      initials: "DM",
      avatarBg: "#0284c7",
      isLocalGuide: true,
      reviewsCount: "19 reviews",
      rating: 5,
      date: "4 months ago",
      category: "corporate",
      vehicle: "Toyota Hiace Van",
      review:
        "Hired a van for moving house across Sydney. Vehicle was clean, well serviced, and had zero mechanical issues. Returning the vehicle was as easy as picking it up. Transparent terms, friendly team, and quick deposit release. Easily the smoothest vehicle rental experience I've had in NSW.",
      likes: 9,
    },
  ];

  const filteredReviews = googleReviews.filter((r) => {
    if (reviewFilter === "all") return true;
    if (reviewFilter === "5star") return r.rating === 5;
    return r.category === reviewFilter;
  });

  const promoVehicles = [
    {
      title: "Executive & Premium Sedans",
      tagline: "Sophistication & Comfort for Corporate or Leisure",
      badge: "Featured Promotion",
      img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&fit=crop",
      desc: "Experience smooth handling and executive luxury with our immaculate sedan fleet, maintained to the highest standards.",
    },
    {
      title: "Spacious Prestige SUVs",
      tagline: "Ample Capacity with Refined Road Presence",
      badge: "Family & Touring",
      img: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&fit=crop",
      desc: "Ideal for family getaways, regional road trips, or group travel with generous luggage room and elevated comfort.",
    },
    {
      title: "Efficient City Compacts",
      tagline: "Agile, Economical & Convenient",
      badge: "Urban Agility",
      img: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&fit=crop",
      desc: "Perfect for seamless city navigation, day-to-day commutes, and effortless parking across Sydney and beyond.",
    },
  ];

  // Navbar scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slider auto-slide timer (5 seconds)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === promoVehicles.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, promoVehicles.length]);

  // Scroll Fade-in Observer
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    fadeElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Handle WhatsApp Inquiry Submission
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!rentalDate) {
      setFormError("Please select your desired rental date.");
      return;
    }
    if (!requirements.trim()) {
      setFormError("Please describe your vehicle preferences or requirements.");
      return;
    }

    setFormError("");
    const phone = "61452572702";
    const message = `Hi Sharentals,\n\nI would like to inquire about a vehicle rental.\n\n📅 Desired Date: ${rentalDate}\n🚗 Requirements: ${requirements.trim()}\n\nPlease let me know available options. Thank you!`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="sharentals-editorial-app">
      {/* ========== NAVBAR ========== */}
      <header className={`navbar-editorial ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="container-editorial nav-inner">
          <a href="#home" className="brand-logo-anchor" aria-label="Sharentals Home">
            <img
              src={logoImg}
              alt="Sharentals Logo"
              className="brand-logo-img"
            />
          </a>

          <nav className="nav-menu-desktop" aria-label="Main Navigation">
            <a href="#home">Home</a>
            <a href="#promotions">Vehicle Promotions</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-action-desktop">
            <a href="#inquiry" className="btn-editorial-primary">
              <i className="fab fa-whatsapp"></i> Inquire Now
            </a>
          </div>

          <button
            className="mobile-toggle-btn"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: "var(--navy-deep)" }}>
              Home
            </a>
            <a href="#promotions" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: "var(--navy-deep)" }}>
              Vehicle Promotions
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: "var(--navy-deep)" }}>
              About
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: "var(--navy-deep)" }}>
              Services
            </a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: "var(--navy-deep)" }}>
              Customer Reviews
            </a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: "var(--navy-deep)" }}>
              How It Works
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: "var(--navy-deep)" }}>
              Contact
            </a>
            <a
              href="#inquiry"
              className="btn-editorial-primary"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textAlign: "center", marginTop: "8px" }}
            >
              <i className="fab fa-whatsapp"></i> Inquire Now
            </a>
          </div>
        </div>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section className="hero-editorial" id="home">
        <div className="container-editorial">
          <div className="hero-grid">
            {/* Left Narrative Column */}
            <div className="hero-copy-col fade-in">
              <span className="eyebrow">Australian Vehicle Rental · Auburn NSW</span>
              <h1 className="heading-display" style={{ marginBottom: "1.25rem" }}>
                Your Journey, <br />
                Our Vehicles.
              </h1>
              <p className="lead-text" style={{ marginBottom: "2rem" }}>
                Sharentals offers a refined vehicle rental experience across Australia. Fast WhatsApp-driven inquiries, transparent communication, and dependable quality tailored to your travel schedule.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                <a
                  href="https://wa.me/61452572702?text=Hi%20Sharentals%2C%20I%20would%20like%20to%20inquire%20about%20a%20vehicle%20rental."
                  className="btn-editorial-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> Inquire on WhatsApp
                </a>
                <a href="#promotions" className="btn-editorial-outline">
                  View Promotions <i className="fas fa-arrow-down" style={{ fontSize: "0.85rem" }}></i>
                </a>
              </div>

              {/* Editorial Trust Badges */}
              <div className="hero-trust-row">
                <div className="hero-trust-item">
                  <p className="label">Location</p>
                  <p className="val">Auburn, NSW 2144</p>
                </div>
                <div className="hero-trust-item">
                  <p className="label">Response</p>
                  <p className="val">Direct WhatsApp</p>
                </div>
                <div className="hero-trust-item">
                  <p className="label">Standard</p>
                  <p className="val">Verified Fleet</p>
                </div>
              </div>
            </div>

            {/* Right Visual Frame */}
            <div className="hero-visual-frame fade-in">
              <img
                src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                alt="Sharentals Luxury Sedan on Road"
              />
              <div className="hero-badge-float">
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <i className="fas fa-shield-check" style={{ color: "var(--brand-gold)" }}></i>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>Premium Vehicle Fleet · NSW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VEHICLE PROMOTIONS SHOWCASE ========== */}
      <section className="section-editorial" id="promotions" style={{ backgroundColor: "var(--canvas-subtle)" }}>
        <div className="container-editorial">
          <div className="fade-in" style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow">Featured Offers</span>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <h2 className="heading-section">Vehicle Promotions</h2>
                <p className="lead-text" style={{ marginTop: "8px" }}>
                  Explore currently featured vehicle categories and special rental inquiries.
                </p>
              </div>

              {/* Slider Controls */}
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? promoVehicles.length - 1 : prev - 1))}
                  className="btn-editorial-outline"
                  style={{ padding: "10px 16px", borderRadius: "50%" }}
                  aria-label="Previous Slide"
                >
                  <i className="fas fa-arrow-left"></i>
                </button>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--navy-deep)", minWidth: "48px", textAlign: "center" }}>
                  0{currentSlide + 1} / 0{promoVehicles.length}
                </span>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === promoVehicles.length - 1 ? 0 : prev + 1))}
                  className="btn-editorial-outline"
                  style={{ padding: "10px 16px", borderRadius: "50%" }}
                  aria-label="Next Slide"
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Showcase Card */}
          <div
            className="promo-showcase-card fade-in"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {promoVehicles.map((promo, idx) => (
              <img
                key={idx}
                src={promo.img}
                alt={promo.title}
                className="promo-slide-bg"
                style={{
                  opacity: currentSlide === idx ? 1 : 0,
                  pointerEvents: currentSlide === idx ? "auto" : "none",
                }}
              />
            ))}
            <div className="promo-slide-overlay"></div>

            <div className="promo-slide-content">
              <span
                style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  background: "var(--brand-orange)",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  marginBottom: "16px",
                }}
              >
                {promoVehicles[currentSlide].badge}
              </span>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: "12px", lineHeight: 1.2 }}>
                {promoVehicles[currentSlide].title}
              </h3>
              <p style={{ fontSize: "1.1rem", color: "var(--brand-gold)", fontWeight: 600, marginBottom: "12px" }}>
                {promoVehicles[currentSlide].tagline}
              </p>
              <p style={{ fontSize: "0.98rem", color: "rgba(255, 255, 255, 0.8)", marginBottom: "28px", maxWidth: "520px", lineHeight: 1.6 }}>
                {promoVehicles[currentSlide].desc}
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                <a
                  href={`https://wa.me/61452572702?text=${encodeURIComponent(`Hi Sharentals, I'm interested in the ${promoVehicles[currentSlide].title} promotion. Please let me know rates and availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-primary"
                >
                  <i className="fab fa-whatsapp"></i> Inquire About This Vehicle
                </a>
                <a href="#inquiry" className="btn-editorial-dark" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
                  Custom Date Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section className="section-editorial" id="about">
        <div className="container-editorial">
          <div className="hero-grid">
            <div className="hero-visual-frame fade-in">
              <img
                src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop"
                alt="Sharentals Fleet Quality"
              />
            </div>

            <div className="fade-in">
              <span className="eyebrow">Our Ethos</span>
              <h2 className="heading-section" style={{ marginBottom: "1.5rem" }}>
                Direct, Transparent, <br />
                Australian Service.
              </h2>
              <p className="lead-text" style={{ marginBottom: "1.25rem" }}>
                Based in Auburn, NSW, Sharentals was created to eliminate the friction of rigid rental portals. We believe in direct human communication, honest rates, and reliable vehicles that give you complete peace of mind.
              </p>
              <p style={{ fontSize: "1rem", color: "var(--text-body)", lineHeight: 1.7, marginBottom: "2rem" }}>
                Whether you need a vehicle for business in Greater Sydney, a weekend coastal journey, or extended hire, our team coordinates directly with you over WhatsApp. Tell us what you need, and we ensure you have the right vehicle at the right time.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", paddingTop: "20px", borderTop: "1px solid var(--border-hairline)" }}>
                <div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--navy-deep)", marginBottom: "6px" }}>
                    Auburn, NSW Hub
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-body)" }}>
                    Conveniently located for Sydney and regional NSW travel.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--navy-deep)", marginBottom: "6px" }}>
                    Personalized Quotes
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-body)" }}>
                    Direct WhatsApp response with clear conditions and no surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section className="section-editorial" id="services" style={{ backgroundColor: "var(--canvas-subtle)" }}>
        <div className="container-editorial">
          <div className="fade-in">
            <span className="eyebrow">What We Provide</span>
            <h2 className="heading-section">Our Core Rental Services</h2>
            <p className="lead-text" style={{ marginTop: "8px" }}>
              Tailored vehicle solutions designed around your schedule and requirements.
            </p>
          </div>

          <div className="services-editorial-list fade-in">
            {/* Service 01 */}
            <div className="service-row-item">
              <div className="service-row-number">01</div>
              <div className="service-row-title">Vehicle Rentals</div>
              <div className="service-row-desc">
                From comfortable sedans to roomy SUVs and economical compacts, we offer well-maintained vehicles suitable for personal excursions, business engagements, and family trips across Australia.
              </div>
            </div>

            {/* Service 02 */}
            <div className="service-row-item">
              <div className="service-row-number">02</div>
              <div className="service-row-title">Flexible Rental Options</div>
              <div className="service-row-desc">
                Rent according to your schedule. Whether you require a vehicle for a single day, a weekend getaway, or an extended multi-week period, we accommodate your rental timeline with straightforward conditions.
              </div>
            </div>

            {/* Service 03 */}
            <div className="service-row-item">
              <div className="service-row-number">03</div>
              <div className="service-row-title">Direct WhatsApp Concierge</div>
              <div className="service-row-desc">
                Skip impersonal form pipelines. Communicate one-on-one with our team via WhatsApp to discuss vehicle preferences, rates, delivery inquiries, and tailored arrangements in real time.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CUSTOMER REVIEWS (GOOGLE REVIEWS) ========== */}
      <section className="section-editorial reviews-section-wrapper" id="reviews">
        <div className="container-editorial">
          {/* Header & Rating Summary */}
          <div className="reviews-header-block fade-in">
            <div>
              <span className="eyebrow">Google Customer Reviews</span>
              <h2 className="heading-section">What our clients say</h2>
              <p className="lead-text" style={{ marginTop: "8px" }}>
                Authentic 5-star ratings and experiences shared by drivers and travelers renting with Sharentals across Sydney and NSW.
              </p>
            </div>

            {/* Google Rating Summary Card */}
            <div className="reviews-rating-summary-card">
              <div className="rating-score-cluster">
                <div className="google-icon-wrapper" aria-label="Google Rating">
                  <i className="fab fa-google"></i>
                </div>
                <div>
                  <div className="rating-num-row">
                    <span className="rating-score">4.4</span>
                    <span className="rating-out-of">/ 5.0</span>
                  </div>
                  <div className="rating-stars" aria-label="4.5 stars rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p className="rating-count-label">Based on 105+ Google Reviews</p>
              <a
                href="https://www.google.com/search?q=Sharentals+Auburn+NSW+car+rental+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-google-reviews"
                aria-label="Read all reviews on Google"
              >
                <span>Read all reviews on Google</span>
                <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: "0.8rem" }}></i>
              </a>
            </div>
          </div>

          {/* Review Filter Bar */}
          <div className="reviews-filter-bar fade-in" role="tablist" aria-label="Filter reviews">
            <button
              className={`review-filter-btn ${reviewFilter === "all" ? "active" : ""}`}
              onClick={() => setReviewFilter("all")}
            >
              <i className="fas fa-layer-group"></i> All Reviews ({googleReviews.length})
            </button>
            <button
              className={`review-filter-btn ${reviewFilter === "5star" ? "active" : ""}`}
              onClick={() => setReviewFilter("5star")}
            >
              <i className="fas fa-star" style={{ color: "#f59e0b" }}></i> 5-Star Only (5)
            </button>
            <button
              className={`review-filter-btn ${reviewFilter === "family" ? "active" : ""}`}
              onClick={() => setReviewFilter("family")}
            >
              <i className="fas fa-mountain-sun"></i> Family & Trips
            </button>
            <button
              className={`review-filter-btn ${reviewFilter === "city" ? "active" : ""}`}
              onClick={() => setReviewFilter("city")}
            >
              <i className="fas fa-city"></i> City & Commute
            </button>
            <button
              className={`review-filter-btn ${reviewFilter === "rideshare" ? "active" : ""}`}
              onClick={() => setReviewFilter("rideshare")}
            >
              <i className="fas fa-car-side"></i> Rideshare & Delivery
            </button>
          </div>

          {/* Google Reviews Cards Grid */}
          <div className="reviews-cards-grid fade-in">
            {filteredReviews.map((item) => (
              <div key={item.id} className="google-review-card">
                <div>
                  {/* Top: Author & Google Icon */}
                  <div className="review-card-top">
                    <div className="review-author-info">
                      <div
                        className="review-avatar-circle"
                        style={{ backgroundColor: item.avatarBg }}
                        aria-hidden="true"
                      >
                        {item.initials}
                      </div>
                      <div>
                        <div className="review-author-name-row">
                          <span className="review-author-title">{item.name}</span>
                          <i
                            className="fas fa-circle-check review-verified-badge"
                            title="Verified Google Reviewer"
                          ></i>
                        </div>
                        <div className="review-author-sub">
                          {item.isLocalGuide && (
                            <span className="review-local-guide-chip">
                              <i className="fas fa-star" style={{ fontSize: "0.7rem" }}></i> Local Guide
                            </span>
                          )}
                          <span>· {item.reviewsCount}</span>
                        </div>
                      </div>
                    </div>
                    <div className="review-google-badge-top" title="Posted on Google">
                      <i className="fab fa-google"></i>
                    </div>
                  </div>

                  {/* Rating Stars & Relative Date */}
                  <div className="review-rating-row">
                    <div className="review-stars-list">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <span className="review-date-label">{item.date}</span>
                  </div>

                  {/* Vehicle Rented Pill */}
                  <div className="review-vehicle-pill">
                    <i className="fas fa-car"></i> {item.vehicle}
                  </div>

                  {/* Review Text */}
                  <p className="review-quote-text">“{item.review}”</p>
                </div>

                {/* Card Footer: Helpful button & Trust badge */}
                <div className="review-card-footer">
                  <button
                    className={`review-helpful-btn ${helpfulLikes[item.id] ? "liked" : ""}`}
                    onClick={() => toggleHelpful(item.id)}
                    aria-label={`Mark review as helpful. Currently ${item.likes + (helpfulLikes[item.id] ? 1 : 0)}`}
                  >
                    <i className="fas fa-thumbs-up"></i>
                    <span>Helpful ({item.likes + (helpfulLikes[item.id] ? 1 : 0)})</span>
                  </button>
                  <span className="review-trust-verified">
                    <i className="fas fa-shield-check"></i> Google Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust & Write-a-Review Banner */}
          <div className="reviews-trust-banner fade-in">
            <div className="reviews-trust-banner-content">
              <div className="reviews-trust-banner-icon">
                <i className="fab fa-google"></i>
              </div>
              <div>
                <h4 style={{ color: "var(--navy-deep)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "4px" }}>
                  Have you hired a vehicle with Sharentals?
                </h4>
                <p style={{ color: "var(--text-body)", fontSize: "0.92rem", margin: 0 }}>
                  Share your experience on Google Reviews to help fellow travelers and drivers in Sydney.
                </p>
              </div>
            </div>
            <div className="reviews-trust-banner-actions">
              <a
                href="https://www.google.com/search?q=Sharentals+Auburn+NSW+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-primary"
                style={{ padding: "10px 20px", fontSize: "0.88rem" }}
              >
                <i className="fas fa-pen-to-square"></i> Review Us on Google
              </a>
              <a
                href="https://maps.google.com/?q=244+Chisholm+Road+Auburn+NSW+2144+Australia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-outline"
                style={{ padding: "10px 20px", fontSize: "0.88rem" }}
              >
                <i className="fas fa-location-dot"></i> View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="section-editorial" id="how-it-works">
        <div className="container-editorial">
          <div className="fade-in" style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Simple Process</span>
            <h2 className="heading-section">How to Rent with Sharentals</h2>
            <p className="lead-text" style={{ margin: "12px auto 0" }}>
              Three effortless steps to secure your preferred vehicle.
            </p>
          </div>

          <div className="journey-grid-desktop fade-in">
            <div className="journey-connector-line"></div>

            {/* Step 1 */}
            <div className="journey-step-card">
              <div className="journey-step-num">01</div>
              <h3>Choose Your Date</h3>
              <p>Select your intended rental start date using our quick date selector below.</p>
            </div>

            {/* Step 2 */}
            <div className="journey-step-card">
              <div className="journey-step-num">02</div>
              <h3>Tell Us What You Need</h3>
              <p>Briefly describe the type of vehicle (SUV, sedan, compact) and any specific requirements.</p>
            </div>

            {/* Step 3 */}
            <div className="journey-step-card">
              <div className="journey-step-num">03</div>
              <h3>Inquire on WhatsApp</h3>
              <p>Click to start a WhatsApp conversation with your details prefilled for immediate assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INQUIRY CONVERSION CANVAS ========== */}
      <section className="section-editorial" id="inquiry" style={{ paddingTop: 0 }}>
        <div className="container-editorial">
          <div className="inquiry-canvas fade-in">
            <div className="inquiry-grid">
              {/* Left Canvas Header */}
              <div>
                <span className="eyebrow" style={{ color: "var(--brand-gold)" }}>Direct WhatsApp Inquiry</span>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.15, marginBottom: "16px" }}>
                  Ready to rent? <br />
                  Let's arrange your vehicle.
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "24px" }}>
                  Pick your date and tell us what you're looking for. We will immediately open WhatsApp with your request ready to send.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "rgba(255, 255, 255, 0.8)", fontSize: "0.92rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <i className="fas fa-check" style={{ color: "var(--brand-orange)" }}></i> No booking fee or online payment required
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <i className="fas fa-check" style={{ color: "var(--brand-orange)" }}></i> Fast response during Australian business hours
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <i className="fas fa-check" style={{ color: "var(--brand-orange)" }}></i> Pickup and service from Auburn, NSW 2144
                  </div>
                </div>
              </div>

              {/* Right Form Card */}
              <div style={{ background: "rgba(255, 255, 255, 0.04)", padding: "36px", borderRadius: "16px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <form onSubmit={handleWhatsAppSubmit}>
                  <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="rentalDate" style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255, 255, 255, 0.85)", marginBottom: "8px" }}>
                      Desired Rental Date *
                    </label>
                    <input
                      type="date"
                      id="rentalDate"
                      name="rentalDate"
                      min={today}
                      value={rentalDate}
                      onChange={(e) => setRentalDate(e.target.value)}
                      className="inquiry-input-field"
                      required
                    />
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="requirements" style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255, 255, 255, 0.85)", marginBottom: "8px" }}>
                      Vehicle Requirements & Notes *
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      placeholder="e.g. SUV, automatic transmission, 5 passengers, 4 days weekend trip..."
                      rows="4"
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      className="inquiry-textarea-field"
                      required
                    ></textarea>
                  </div>

                  {formError && (
                    <div style={{ background: "rgba(239, 68, 68, 0.2)", border: "1px solid rgba(239, 68, 68, 0.4)", color: "#fca5a5", padding: "10px 14px", borderRadius: "6px", fontSize: "0.88rem", marginBottom: "18px" }}>
                      <i className="fas fa-circle-exclamation" style={{ marginRight: "6px" }}></i>
                      {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-editorial-primary"
                    style={{ width: "100%", padding: "16px", fontSize: "1.05rem" }}
                  >
                    <i className="fab fa-whatsapp" style={{ fontSize: "1.2rem" }}></i> Send Inquiry on WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT & LOCATION SECTION ========== */}
      <section className="section-editorial" id="contact" style={{ backgroundColor: "#ffffff" }}>
        <div className="container-editorial">
          <div className="fade-in">
            <span className="eyebrow">Connect With Us</span>
            <h2 className="heading-section">Contact Sharentals</h2>
            <p className="lead-text" style={{ marginTop: "8px" }}>
              Get in touch directly or visit our Auburn, NSW hub.
            </p>
          </div>

          <div className="contact-editorial-grid fade-in">
            {/* Left Contact Information List */}
            <div className="contact-meta-card">
              {/* Row 1: Location */}
              <div className="contact-row-entry">
                <div className="contact-icon-box">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <p className="label">Location & Service Area</p>
                  <p className="val">244 Chisholm Road, Auburn, NSW 2144, Australia</p>
                </div>
              </div>

              {/* Row 2: Phone */}
              <div className="contact-row-entry">
                <div className="contact-icon-box">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <p className="label">Direct Phone</p>
                  <a href="tel:+61452572702" className="val" style={{ display: "block" }}>
                    +61 452 572 702
                  </a>
                </div>
              </div>

              {/* Row 3: Email */}
              <div className="contact-row-entry">
                <div className="contact-icon-box">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="label">Email Inquiry</p>
                  <a href="mailto:info@sharentals.com.au" className="val" style={{ display: "block" }}>
                    info@sharentals.com.au
                  </a>
                </div>
              </div>

              {/* Row 4: WhatsApp Direct */}
              <div className="contact-row-entry">
                <div className="contact-icon-box" style={{ background: "var(--brand-orange)" }}>
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <p className="label">WhatsApp Support</p>
                  <a
                    href="https://wa.me/61452572702"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="val"
                    style={{ color: "var(--brand-orange)", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    Chat on WhatsApp <i className="fas fa-external-link-alt" style={{ fontSize: "0.8rem" }}></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Interactive Google Map Embed */}
            <div className="contact-map-frame">
              <iframe
                title="Sharentals Auburn NSW Hub Map"
                src="https://maps.google.com/maps?q=244%20Chisholm%20Road,%20Auburn%20NSW%202144,%20Australia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer-editorial">
        <div className="container-editorial">
          <div className="footer-grid-layout">
            {/* Col 1: Brand */}
            <div>
              <a href="#home" className="footer-brand-logo-badge" aria-label="Sharentals Home">
                <img
                  src={logoImg}
                  alt="Sharentals Logo"
                  className="footer-brand-logo-img"
                />
              </a>
              <p style={{ marginTop: "18px", fontSize: "0.92rem", lineHeight: 1.65, color: "rgba(255, 255, 255, 0.6)", maxWidth: "320px" }}>
                Premium vehicle rental in Australia. Simple inquiries, personal service, and trusted fleet options based in Auburn, NSW.
              </p>
              <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
                <a
                  href="https://facebook.com/sharentals"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "1.2rem" }}
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://wa.me/61452572702"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "1.2rem" }}
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "20px" }}>
                Navigation
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
                <a href="#home">Home</a>
                <a href="#promotions">Promotions</a>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#reviews">Customer Reviews</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            {/* Col 3: Inquiries */}
            <div>
              <h4 style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "20px" }}>
                Inquiry
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
                <a href="#inquiry">Rental Inquiry</a>
                <a href="https://wa.me/61452572702" target="_blank" rel="noopener noreferrer">WhatsApp Concierge</a>
                <a href="tel:+61452572702">Phone Inquiry</a>
              </div>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h4 style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "20px" }}>
                Auburn Hub
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
                <p style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <i className="fas fa-location-dot" style={{ color: "var(--brand-orange)", marginTop: "4px" }}></i>
                  <span>Auburn, NSW 2144, Australia</span>
                </p>
                <p style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <i className="fas fa-phone" style={{ color: "var(--brand-orange)" }}></i>
                  <a href="tel:+61452572702">+61 452 572 702</a>
                </p>
                <p style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <i className="fas fa-envelope" style={{ color: "var(--brand-orange)" }}></i>
                  <a href="mailto:info@sharentals.com.au">info@sharentals.com.au</a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.45)" }}>
            <span>&copy; {new Date().getFullYear()} Sharentals Australia. All rights reserved.</span>
            <span>Australian Vehicle Rental · Auburn, NSW</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;