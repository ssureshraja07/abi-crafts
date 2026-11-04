import { useEffect, useState } from "react";

import crafts1   from "./images/crafts1.png";
import crafts2      from "./images/crafts2.png";
import crafts3      from "./images/crafts3.png";
import crafts4      from "./images/crafts4.png";
import crafts5      from "./images/crafts5.png";
import crafts6      from "./images/crafts6.png";
import crafts7      from "./images/crafts7.png";
import crafts8      from "./images/crafts8.png";
import crafts9      from "./images/crafts9.png";
import crafts10     from "./images/crafts10.png";
import crafts11     from "./images/crafts11.png";
import contact_crafts  from "./images/contact-crafts.png";
import logo         from "./images/crafts-logo.png";
import craftsabout  from "./images/crafts-about.png";
import craftsStory  from "./images/crafts-story.png";
import craftsbg     from "./images/craftsbg.png";

/* ─── Data ──────────────────────────────────────────────────── */
const IMAGES = [
  contact_crafts, crafts1, crafts2, crafts3, crafts4, crafts5, crafts6,
  crafts7, crafts8, crafts9, crafts10, crafts11,
];

const BRAND = {
  name: "Awesome",
  nameSuffix: "Crafts",
  tagline: "Handcrafted with Love for Memories",
  phones: ["7339095050", "9791780074"],
};

const PRODUCTS = [
  { id: 1,  name: "Crochet Flower Bouquet", category: "Home Decor",        img: crafts1 },
  { id: 2,  name: "Amigurumi Teddy Bear",   category: "Toys & Softies",    img: crafts2 },
  { id: 3,  name: "Granny Square Cushion",  category: "Home Decor",        img: crafts3 },
  { id: 4,  name: "Lace Table Runner",      category: "Home Decor",        img: crafts4 },
  { id: 5,  name: "Boho Wall Hanging",      category: "Home Decor",        img: crafts5 },
  { id: 6,  name: "Handmade Crochet Bag",   category: "Accessories",       img: crafts6 },
  { id: 7,  name: "Baby Booties Set",       category: "Gifts & Baby",      img: crafts7 },
  { id: 8,  name: "Cute Keychain Charms",   category: "Accessories",       img: crafts8 },
  { id: 9,  name: "Round Coaster Set",      category: "Home Decor",        img: crafts9 },
  { id: 10, name: "Boho Plant Hanger",      category: "Home Decor",        img: crafts10 },
  { id: 11, name: "Handmade Bunny Toy",     category: "Toys & Softies",    img: crafts11 },
];

const CATEGORIES = ["All", "Home Decor", "Toys & Softies", "Accessories", "Gifts & Baby"];

const LINKS = [
  { id: "home",         label: "Home" },
  { id: "products",     label: "Collections" },
  { id: "about",        label: "About Us" },
  { id: "reviews",      label: "Customer Reviews" },
  { id: "contact",      label: "Contact" },
];

const STATS = [
  { value: "500+",  label: "Happy Customers" },
  { value: "1,200+",label: "Handmade Items"  },
  { value: "100%",  label: "Pure Handcrafted"},
  { value: "4.9 ★", label: "Customer Rating" },
];

const TESTIMONIALS = [
  {
    name: "Priya S.",
    role: "Verified Buyer",
    text: "The crochet flower bouquet is beyond gorgeous! The finishing is so neat and it looks 10x better in real life. Everyone was praising it at home.",
    stars: 5,
  },
  {
    name: "Meena R.",
    role: "Verified Buyer",
    text: "Ordered the Amigurumi teddy bear for my niece. Super soft, completely child-safe, and packed so thoughtfully. Excellent service!",
    stars: 5,
  },
  {
    name: "Kavitha L.",
    role: "Verified Buyer",
    text: "The boho plant hanger and coasters added such a warm, aesthetic vibe to our living room. Truly premium handcrafted work. Highly recommend!",
    stars: 5,
  },
];

const wa = (msg) =>
  `https://wa.me/91${BRAND.phones[0]}?text=${encodeURIComponent(msg)}`;

/* ─── Scroll Reveal Hook ────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document
      .querySelectorAll(".reveal, .stagger-children")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

/* ─── SVG Icons ─────────────────────────────────────────────── */
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const WAIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ChevronUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

/* ════════════════════════════════════════════════════════════════
   TOP PROMO BAR (Bold Cherry Red Bar - Zero Pink)
   ════════════════════════════════════════════════════════════════ */
function TopBar() {
  return (
    <div className="bg-[#B91C1C] text-white py-2 text-center text-xs font-semibold tracking-wide">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <p className="hidden text-neutral-100 sm:block">
          ✨ Premium Custom Handmade Crochet Decor &amp; Gifts
        </p>
        <p className="mx-auto font-bold sm:mx-0">
          Express Delivery Available &bull; <span className="underline underline-offset-2">Pan-India Shipping</span>
        </p>
        <div className="hidden items-center gap-4 text-white sm:flex">
          <a href={`tel:+91${BRAND.phones[0]}`} className="hover:underline transition">
            Call: +91 {BRAND.phones[0]}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   MAIN NAVBAR (Pure White, Deep Black & Solid Cherry Red)
   ════════════════════════════════════════════════════════════════ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-md border-b border-neutral-200" : "border-b border-neutral-100"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Brand Logo with Solid Cherry Red Ring */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Awesome Crafts Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-[#B91C1C] transition group-hover:scale-105"
          />
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
              {BRAND.name}
              <span className="text-[#B91C1C] italic font-serif ml-1.5">{BRAND.nameSuffix}</span>
            </span>
            <p className="hidden sm:block text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
              {BRAND.tagline}
            </p>
          </div>
        </a>

        
        {/* Desktop Nav Links & Solid Cherry Red CTA */}
        <div className="hidden lg:flex items-center gap-7">
          <nav className="flex items-center gap-6 text-sm font-bold text-neutral-900">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="transition hover:text-[#B91C1C]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={wa("Hi Awesome Crafts, I want to place an order.")}
            target="_blank"
            rel="noreferrer"
            className="btn-cherry flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            <WAIcon />
            Order on WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={wa("Hi Awesome Crafts, I want to place an order.")}
            target="_blank"
            rel="noreferrer"
            className="btn-cherry flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold"
          >
            <WAIcon />
            Order
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-neutral-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="text-2xl font-light">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Subcategory Menu Strip */}
      <div className="border-t border-neutral-200 bg-[#FAFAFA] py-2 overflow-x-auto scrollbar-none hidden sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 text-xs font-bold text-neutral-800">
          <a href="#products" className="hover:text-[#B91C1C] transition whitespace-nowrap">Home Decor</a>
          <span className="text-neutral-400">&bull;</span>
          <a href="#products" className="hover:text-[#B91C1C] transition whitespace-nowrap">Amigurumi Toys</a>
          <span className="text-neutral-400">&bull;</span>
          <a href="#products" className="hover:text-[#B91C1C] transition whitespace-nowrap">Crochet Bouquets</a>
          <span className="text-neutral-400">&bull;</span>
          <a href="#products" className="hover:text-[#B91C1C] transition whitespace-nowrap">Handmade Bags</a>
          <span className="text-neutral-400">&bull;</span>
          <a href="#products" className="hover:text-[#B91C1C] transition whitespace-nowrap">Baby Accessories</a>
          <span className="text-neutral-400">&bull;</span>
          <a href="#contact" className="text-[#B91C1C] font-extrabold hover:underline whitespace-nowrap">Custom Orders &rarr;</a>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-neutral-200 bg-white px-5 py-4 lg:hidden shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="text-base font-bold text-neutral-900 hover:text-[#B91C1C] transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-neutral-200">
            <p className="text-xs text-neutral-500 mb-2">Need quick assistance?</p>
            <a
              href={`tel:+91${BRAND.phones[0]}`}
              className="text-sm font-bold text-neutral-900 block"
            >
              📞 +91 {BRAND.phones[0]}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ════════════════════════════════════════════════════════════════
   HERO SECTION (DIRECT CONTENT ON CLEAR BACKGROUND IMAGE - NO BOX)
   ════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image: Full cover & Clear */}
      <div className="absolute inset-0 z-0">
        <img
          src={craftsbg}
          alt="Handmade crochet background banner"
          className="w-full h-full object-cover object-center"
        />
        {/* Balanced transparent tint so image is clearly visible & text is readable */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Hero Content DIRECTLY on background image (NO BOX) */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28 text-center text-white">
        {/* Badge: Black & Solid Cherry Red Pill */}
        <div className="reveal inline-flex items-center gap-2 rounded-full border-2 border-[#B91C1C] bg-black/85 px-4 py-1.5 text-xs font-bold text-white shadow-2xl backdrop-blur-sm">
          <span className="text-[#B91C1C] font-black">✦</span>
          <span>100% Handcrafted Artisan Heritage</span>
        </div>

        {/* Main Headline directly on image */}
        <h1 className="reveal mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          Handcrafted with Love, <br />
          <span className="text-[#B91C1C] italic font-serif">Made for Memories.</span>
        </h1>

        {/* Subtitle directly on image */}
        <p className="reveal mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-100 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Elevate your home and celebrations with authentic handmade crochet artistry. 
          From everlasting flower bouquets to cuddly amigurumi companions and bohemian decor, each piece is crafted with utmost care.
        </p>

        {/* Key Features row directly on image */}
        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold text-neutral-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          <span className="flex items-center gap-2">
            <span className="text-[#B91C1C] font-black">✔</span> 100% Pure Handcrafted
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#B91C1C] font-black">✔</span> Premium Quality Yarn
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#B91C1C] font-black">✔</span> Custom Colors &amp; Sizes
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#B91C1C] font-black">✔</span> Pan-India Delivery
          </span>
        </div>

        {/* Action Buttons directly on image */}
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#products"
            className="btn-cherry rounded-full px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl"
          >
            Explore Collection
          </a>
          <a
            href={wa("Hi Awesome Crafts, I'd like to place a custom crochet order.")}
            target="_blank"
            rel="noreferrer"
            className="btn-outline-white rounded-full px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl"
          >
            Custom Order on WhatsApp &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   NEW ARRIVAL BANNER (Pure White, Deep Black & Cherry Red)
   ════════════════════════════════════════════════════════════════ */
function NewArrivalBanner() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 my-8">
      <div className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-[#FAFAFA] py-8 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 shadow-sm">
        <div>
          <span className="font-serif italic text-3xl sm:text-4xl text-neutral-950 block font-light">
            New <span className="font-serif font-bold not-italic text-[#B91C1C]">Arrivals</span>
          </span>
          <p className="text-sm font-medium text-neutral-700 mt-1">
            Select from the latest handcrafted collection &bull; Limited edition festive &amp; gifting pieces
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#products"
            className="btn-cherry rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            Shop New Designs
          </a>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   PRODUCTS SECTION (BORDERLESS TILES LIKE ECRAFTINDIA IMAGE)
   - Mobile: 2x2 grid (grid-cols-2)
   - Desktop: 4 columns (lg:grid-cols-4)
   - Title overlaid on bottom with dark gradient scrim
   - Solid Cherry Red accents
   ════════════════════════════════════════════════════════════════ */
function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const filteredProducts = selectedCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="bg-white py-14 sm:py-20 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center reveal mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-neutral-950">
            OUR <span className="text-[#B91C1C]">COLLECTIONS</span>
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-[#B91C1C] rounded-full" />
          <p className="mt-3 text-sm font-medium text-neutral-600">
            Tap on any craft to inspect details or order on WhatsApp
          </p>
        </div>

        
        {/* 2X2 Mobile Grid, 3-4 columns on Tablet/Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => setActiveItem(p)}
              className="craft-product-tile group aspect-square select-none"
            >
              {/* Image */}
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />

              {/* Gradient Scrim & Bottom Title Overlay */}
              <div className="craft-tile-overlay absolute inset-x-0 bottom-0 p-3 sm:p-4 flex flex-col justify-end text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300 hidden sm:block">
                  {p.category}
                </span>
                <h3 className="font-serif text-sm sm:text-base font-bold text-white line-clamp-1 group-hover:text-[#FFFFFF] transition-colors">
                  {p.name}
                </h3>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-neutral-200">
                    Handmade
                  </span>
                  <span className="text-[10px] font-bold bg-[#B91C1C] text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider opacity-95 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper */}
        <div className="mt-10 text-center">
          <p className="text-xs font-medium text-neutral-600">
            Have a custom idea in mind? We customize colors, sizes, and designs.
          </p>
          <a
            href={wa("Hi Awesome Crafts, I want to discuss a custom crochet design.")}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block font-bold text-xs text-[#B91C1C] hover:underline uppercase tracking-wider"
          >
            Chat with our Artisan on WhatsApp &rarr;
          </a>
        </div>
      </div>

      {/* Lightbox / Preview Modal */}
      {activeItem && (
        <Lightbox
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </section>
  );
}

/* ─── Lightbox Modal ─────────────────────────────────────────── */
function Lightbox({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 h-8 w-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition text-lg"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="aspect-square w-full bg-neutral-900 overflow-hidden">
          <img
            src={item.img}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-5 sm:p-6 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B91C1C]">
              {item.category}
            </span>
            <span className="text-xs font-semibold text-neutral-500">100% Handcrafted</span>
          </div>

          <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold text-neutral-950">
            {item.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
            Meticulously crocheted using high-grade yarn. Soft, durable, and customized to your favorite colors.
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href={wa(`Hi Awesome Crafts, I want to order "${item.name}"!`)}
              target="_blank"
              rel="noreferrer"
              className="btn-cherry flex-1 flex items-center justify-center gap-2 rounded-full py-3 text-xs font-bold uppercase tracking-wider"
            >
              <WAIcon />
              Order on WhatsApp
            </a>
            <button
              onClick={onClose}
              className="btn-outline-black px-5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   ABOUT US SECTION (Pure White, Deep Black & Cherry Red)
   ════════════════════════════════════════════════════════════════ */
function About() {
  return (
    <section id="about" className="bg-[#FAFAFA] py-16 sm:py-24 border-y border-neutral-200 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="reveal relative">
            <div className="overflow-hidden rounded-2xl shadow-xl aspect-[4/3] bg-neutral-900">
              <img
                src={craftsStory || craftsabout}
                alt="About Awesome Crafts"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Stamp badge */}
            <div className="absolute -bottom-5 -right-5 bg-black text-white p-4 rounded-xl shadow-xl hidden sm:block border-2 border-[#B91C1C]">
              <p className="text-xs uppercase tracking-widest text-[#B91C1C] font-bold">Artisan Heritage</p>
              <p className="font-serif text-lg font-bold">Made in India</p>
            </div>
          </div>

          {/* Text */}
          <div className="reveal reveal--right">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B91C1C]">
              Our Heritage &amp; Passion
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-neutral-950 leading-tight">
              Every Stitch Tells a Tale of Craftsmanship.
            </h2>
            <div className="mt-3 h-1 w-14 bg-[#B91C1C] rounded-full" />

            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-neutral-700 font-medium">
              <p>
                At <strong>Awesome Crafts</strong>, we believe handcrafted decor carries a soul and warmth that factory-made goods can never replicate.
              </p>
              <p>
                Every loop, stitch, and weave is created with patient dedication. Whether you're gifting a loved one an everlasting crochet floral bouquet or decorating your living room with delicate table runners, we bring you timeless art.
              </p>
              <p className="font-serif italic text-lg text-neutral-950 font-bold">
                "Thank you for supporting independent handmade art."
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-neutral-200 pt-6">
              {STATS.map((s, idx) => (
                <div key={idx}>
                  <p className="font-serif text-2xl font-bold text-[#B91C1C]">{s.value}</p>
                  <p className="text-xs font-bold text-neutral-700 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   CUSTOMER REVIEWS (Clean White Cards, Solid Cherry Red Stars)
   ════════════════════════════════════════════════════════════════ */
function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-16 sm:py-24 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center reveal mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B91C1C]">
            Real Experiences
          </span>
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-bold text-neutral-950">
            Loved by Craft Enthusiasts
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-[#B91C1C] rounded-full" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="reveal rounded-2xl border-2 border-neutral-200 bg-[#FAFAFA] p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex gap-1 text-[#B91C1C]">
                {"★".repeat(t.stars).split("").map((star, sIdx) => (
                  <span key={sIdx} className="text-lg">{star}</span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-800 italic font-medium">
                "{t.text}"
              </p>
              <div className="mt-5 pt-4 border-t border-neutral-200 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-neutral-950">{t.name}</p>
                  <p className="text-[11px] font-semibold text-neutral-500">{t.role}</p>
                </div>
                <span className="text-xs text-[#B91C1C] font-bold">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   CONTACT / CUSTOM ORDER SECTION
   ════════════════════════════════════════════════════════════════ */
function Contact() {
  return (
    <section id="contact" className="bg-[#FAFAFA] py-16 sm:py-24 border-t border-neutral-200 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B91C1C]">
              Have a Query or Custom Requirement?
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-neutral-950">
              Get in Touch with Us
            </h2>
            <div className="mt-3 h-1 w-14 bg-[#B91C1C] rounded-full" />
            <p className="mt-5 text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
              We create personalized orders for birthdays, weddings, festive hampers, and interior styling. 
              Drop us a message or call directly!
            </p>

            <div className="mt-8 space-y-4">
              {BRAND.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:+91${phone}`}
                  className="flex items-center gap-4 rounded-xl border-2 border-neutral-200 bg-white p-4 shadow-sm hover:border-[#B91C1C] transition"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#19b119] text-white text-xl">
                    📞
                  </div>
                  <div>
                    <span className="block text-base font-bold text-neutral-950">
                      +91 {phone}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500">Tap to call our workshop</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={wa("Hi Awesome Crafts, I'd like to ask a few questions regarding your collection.")}
                target="_blank"
                rel="noreferrer"
                className="btn-cherry flex items-center gap-2 rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                <WAIcon />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Clean Showcase Frame */}
          <div className="reveal reveal--right flex justify-center">
            <div className="overflow-hidden rounded-2xl shadow-xl max-w-md w-full bg-white border-2 border-neutral-200 p-2">
              <img
                src={contact_crafts}
                alt="Awesome Crafts"
                className="w-full h-auto rounded-xl object-contain"
              />
              <div className="p-4 text-center">
                <p className="font-serif font-bold text-neutral-950">Awesome Crafts Workshop</p>
                <p className="text-xs font-semibold text-neutral-600 mt-0.5">Handcrafted in Tamil Nadu &bull; Ships Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   FOOTER (Deep Black, Crisp White & Solid Cherry Red)
   ════════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-[#B91C1C]"
              />
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                {BRAND.name}
                <span className="text-[#B91C1C] italic ml-1.5">{BRAND.nameSuffix}</span>
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-neutral-400">
              Handcrafted crochet creations made with love, patience, and premium yarn. Adding elegance to your spaces and memories.
            </p>
            <p className="mt-4 text-xs font-bold text-[#B91C1C]">
              ✦ Custom Gifting &bull; Pan-India Delivery
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-xs text-neutral-400">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="hover:text-[#B91C1C] transition">
                    &rarr; {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-white">
              Collections
            </p>
            <ul className="mt-4 space-y-2 text-xs text-neutral-400">
              <li><a href="#products" className="hover:text-[#B91C1C] transition">Crochet Flower Bouquets</a></li>
              <li><a href="#products" className="hover:text-[#B91C1C] transition">Amigurumi Toys &amp; Plushies</a></li>
              <li><a href="#products" className="hover:text-[#B91C1C] transition">Home Decor &amp; Cushions</a></li>
              <li><a href="#products" className="hover:text-[#B91C1C] transition">Table Runners &amp; Wall Hangings</a></li>
              <li><a href="#products" className="hover:text-[#B91C1C] transition">Baby Booties &amp; Sets</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-white">
              Direct Contact
            </p>
            <ul className="mt-4 space-y-2 text-xs text-neutral-400">
              {BRAND.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:+91${phone}`} className="hover:text-[#B91C1C] transition flex items-center gap-2">
                    <span>📞</span> +91 {phone}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={wa("Hi Awesome Crafts!")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cherry inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase shadow-sm"
                >
                  <WAIcon /> WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {BRAND.name} {BRAND.nameSuffix}. All rights reserved. &bull; Made with pride in India.
        </div>
      </div>
    </footer>
  );
}

/* ─── Scroll To Top ──────────────────────────────────────────── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`scroll-top-btn ${visible ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <ChevronUp />
    </button>
  );
}

/* ─── WhatsApp Floating Action Button ───────────────────────── */
function WAFAB() {
  return (
    <a
      href={wa("Hi Awesome Crafts, I'd like to check out your collection.")}
      target="_blank"
      rel="noreferrer"
      className="wa-fab"
      aria-label="Chat on WhatsApp"
    >
      <WAIcon />
    </a>
  );
}

/* ════════════════════════════════════════════════════════════════
   MAIN APPLICATION
   ════════════════════════════════════════════════════════════════ */
export default function App() {
  useEffect(() => {
    document.title = `${BRAND.name} ${BRAND.nameSuffix} | Premium Handmade Crochet`;
  }, []);

  useScrollReveal();

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#B91C1C] selection:text-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <NewArrivalBanner />
        <Products />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <WAFAB />
    </div>
  );
}
